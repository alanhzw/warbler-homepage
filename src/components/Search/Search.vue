<!--
 * @Description:搜索组件
 * @Date: 2021-05-13 10:45:50
 * @LastEditTime: 2021-05-19 11:21:28
 * @FilePath: \WarblerHomepage\src\components\Search\Search.vue
-->
<template>
  <div class="search-box">
    <!-- 输入框区域 -->
    <div class="content">
      <input type="text" class="search-input" :maxlength='100' placeholder="请输入搜索内容" v-model="value" @keyup.enter="handleClick('baidu')">
      <span></span>
    </div>
    <!-- 图标区域 -->
    <div class="icons">
      <i class="iconfont" v-for='(item,index) in initData' :key='index' @click="handleClick(item.type)" v-html='item.icon' :title='item.title'></i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';
import { SearchType, initData } from 'coms/Search/index';
export default defineComponent({
  name: 'Search',
  setup() {
    const state = reactive({
      // 输入框绑定值
      value: '',
      // 初始图标数据
      initData: initData,
    });
    const handleClick = (type: SearchType) => {
      if (type === 'baidu') {
        window.open(`https://www.baidu.com/s?ie=utf-8&word=${state.value}`);
      }
      if (type === 'biying') {
        window.open(`https://cn.bing.com/search?q=${state.value}`);
      }
      if (type === 'google') {
        window.open(`https://www.google.com/search?q=${state.value}`);
      }
      if (type === 'fanyi') {
        window.open(`https://fanyi.baidu.com/translate?aldtype=16047&query=${state.value}&keyfrom=baidu&smartresult=dict&lang=auto2zh`);
      }
    };
    return {
      handleClick,
      ...toRefs(state),
    };
  },
});
</script>

<style lang='scss'>
.search-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    .search-input {
      position: absolute;
      top: 20px;
      left: 150px;
      width: 400px;
      outline: none;
      border: none;
      border-bottom: 1px solid #ccc;
      padding: 13px 15px;
      font-size: 28px;
      color: var(--theme--main);
      text-align: center;
      background-color: transparent;

      &::-webkit-input-placeholder {
        color: #585c89;
      }
    }
  }

  .icons {
    margin-left: 450px;
    i {
      cursor: pointer;
      margin: 0 10px;
    }
  }
}
</style>
