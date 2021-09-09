<!--
 * @Description:操作栏
 * @Date: 2021-05-11 17:28:17
 * @LastEditTime: 2021-08-18 07:54:12
 * @FilePath: \WarblerHomepage\src\components\ActionBar\ActionBar.vue
-->
<template>
  <div class="action-bar-box">
    <i class="iconfont"
       v-for='(item,index) in initData'
       :key='index'
       :title="item.title"
       v-html="item.icon"
       @click='handleClick(index)'></i>
    <Instructions />
  </div>
  <input type="file"
         id="file-select"
         @change="handleUploadFile">
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { initData } from 'coms/ActionBar/index';
import { emitter } from 'hooks/useMitt';
import createMessage from 'base/Message/index';
import Instructions from 'coms/Instructions/Instructions.vue';
import { downloadFile, uploadFile } from 'utils/file';
import { getItem } from 'utils/localStorage';
import { dataFormat } from 'coms/ActionBar/index';
import localforage from 'localforage';

export default defineComponent({
  name: 'ActionBar',
  props: {
    modelValue: Boolean,
  },
  components: { Instructions },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 点击图标的处理函数
    const handleClick = (index: number) => {
      // 添加标签
      if (index === 0) {
        emitter.emit('add-label');
      }
      // 进入/退出编辑模式
      if (index === 1) {
        emit('update:modelValue', true);
        createMessage('已进入编辑模式,点击右下角即可退出 !');
      }
      // 上传文件
      if (index === 2) {
        // 获取type为file的input元素
        const input = document.querySelector('#file-select') as HTMLInputElement;
        // 模拟点击
        input.click();
      }
      // 下载文件
      if (index === 3) {
        // 从浏览器本地取出数据
        localforage.getItem('WARBLER_DATA').then((value) => {
          // 查询数据库  如果存在数据 使用库里的数据  否则使用初始默认数据
          if (value) {
            downloadFile(value);
          } else {
            downloadFile('');
          }
        });
      }
      // 打开帮助弹窗
      if (index === 4) {
        emitter.emit('open-instructions-dialog');
      }
    };
    // 触发上传文件函数
    const handleUploadFile = (e: Event) => {
      uploadFile(e).then((ev: any) => {
        // 为什么要包裹一层try catch, 因为 JSON.parse在转换的时候,如果格式不符合要求会报错  如果报错说明上传的JSON不是我们想要的,给出提示即可
        try {
          /**
           // 把 JSON 字符串转换为 JSON 对象
          const jsonObj = JSON.parse(ev.target.result);
          // 验证JSON的格式是不是我们需要的格式
          const test = () => {
            // 标志变量
            let flag = true;
            // 循环我们需要的key  在读取的文件中判断是否具有我们所需要的所有key值  如果没有就返回错误
            dataFormat.forEach((dataItem) => {
              const result = Object.keys(jsonObj).find((jsonItem) => dataItem === jsonItem);
              if (!result) {
                flag = false;
              }
            });
            return flag;
          };
          // 如果格式不符合本站要求,给出提示
          if (!test()) {
            createMessage('请上传由本站导出的json格式的文件 !');
            return;
          }
          */
          // 如果符合要求  触发更新数据方法
          const jsonObj = JSON.parse(ev.target.result);
          emitter.emit('update-warblerData', JSON.parse(jsonObj));
        } catch (error) {
          createMessage('请上传由本站导出的json格式的文件 !');
        }
      });
    };
    return {
      handleUploadFile,
      initData,
      handleClick,
    };
  },
});
</script>

<style lang='scss'>
.action-bar-box {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: space-evenly;
  align-items: center;

  i {
    color: var(--theme-main);
    cursor: pointer;
  }
}
#file-select {
  visibility: hidden;
}
</style>
