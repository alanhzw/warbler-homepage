<!--
 * @Description:使用帮助组件
 * @Date: 2021-05-11 18:57:37
 * @LastEditTime: 2021-06-02 15:06:32
 * @FilePath: \WarblerHomepage\src\components\Instructions\Instructions.vue
-->
<template>
  <div class="instructions-box">
    <Dialog :dialog-visible='isShowDialog' @cancle='closeDialog' @confirm='closeDialog' title='使用说明' width='800px' :show-cancle-button='false' class="instructions-dialog">
      <div class="content">
        <ul>
          <li><span>输入内容后，点击对应图案可以使用不同搜索引擎进行内容搜索，也可以点击 <i class="iconfont">&#xe602;</i> 图案进行翻译。回车键默认使用百度搜索。</span></li>
          <li><span>点击左下角 <i class="iconfont">&#xe653;</i> 图案，即可进入编辑模式，可以进行标签，书签的增加、修改、删除等操作。编辑模式下，不可进行跳转，点击右下角“退出编辑模式”即可退出。</span></li>
          <li><span>在编辑模式下，可以拖动标签名称/书签图标进行排序，自动生效。</span></li>
          <li><span>点击左下角 <i class="iconfont">&#xe793;</i> 图案，可以快捷添加标签，无需进入编辑模式。</span></li>
          <li><span>添加、修改书签时，可以在输入目标网址后，点击“自动获取网站名称”或者“自动获取图标地址”按钮，即可自动获取目标网址的名称和图标。</span></li>
          <li><span>由于接口能力有限，会有部分网站自动获取失败的情况，建议手动输入网络图标地址，暂不支持上传。如自动获取失败或者不填写网络图标地址，将使用默认图标替代。</span></li>
          <li><span>本站暂不提供账号功能，为防止数据丢失，可以点击左下角 <i class="iconfont">&#xe625;</i> 图案将数据保存到本地进行备份，在需要的地方点击 <i class="iconfont">&#xe601;</i> 图案进行数据恢复。</span></li>
          <li><span>最后非常感谢大家对本站的支持，欢迎点击右侧图标前往 <strong>github/gitee</strong> 点个 <strong>Star</strong> ，或者到 <strong>掘金社区</strong> 点个赞。</span></li>
        </ul>
      </div>
    </Dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onUnmounted } from 'vue';
import Dialog from 'base/Dialog/Dialog.vue';
import { emitter } from 'hooks/useMitt';
export default defineComponent({
  name: 'Instructions',
  components: { Dialog },
  setup() {
    const isShowDialog = ref(false);
    const closeDialog = () => {
      isShowDialog.value = false;
    };
    const openDialog = () => {
      isShowDialog.value = true;
    };
    // 监听事件,打开帮助弹窗
    emitter.on('open-instructions-dialog', openDialog);
    // 显式卸载
    onUnmounted(() => {
      emitter.off('open-instructions-dialog', openDialog);
    });
    return {
      isShowDialog,
      closeDialog,
      openDialog,
    };
  },
});
</script>

<style lang='scss'>
.instructions-box {
}
.instructions-dialog {
  .content {
    margin-top: 10px;
    max-height: 450px;
    overflow: auto;
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      /* 阴影 */
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: transparent;
    }
    ul {
    }
    li {
      position: relative;
      list-style: none;
      font-size: 14px;
      color: var(--theme--main);
      margin: 5px 10px 5px 20px;
      &:before {
        position: absolute;
        left: 0px;
        top: 4px;
        content: '';
        display: inline-block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background-color: rgba(255, 255, 255, 0.2);
        border: 3px solid #fff;
      }
      span {
        display: inline-block;
        padding-left: 20px;
        line-height: 1.5;
        white-space: pre-wrap;
      }
      i {
        font-size: 14px;
      }
    }
  }
}
</style>
