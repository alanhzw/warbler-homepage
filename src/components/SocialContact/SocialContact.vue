<!--
 * @Description:社交媒体图标组件
 * @Date: 2021-05-03 13:07:54
 * @LastEditTime: 2021-05-17 18:02:10
 * @FilePath: \warbler-homepage\src\components\SocialContact\SocialContact.vue
-->
<template>
  <div class="social-contact-box">
    <div v-for='(item,index) in initData' :key='index' class="item" @click='enter(item.targetUrl)'>
      <span> <i class="iconfont" :title="item.title" v-html="item.icon"></i></span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { initData } from 'coms/SocialContact/index';
export default defineComponent({
  name: 'SocialContact',
  setup() {
    const enter = (url: string) => {
      window.open(url);
    };
    return {
      initData,
      enter,
    };
  },
});
</script>

<style lang='scss'>
.social-contact-box {
  position: fixed;
  right: 5px;
  top: 5px;
  display: flex;
  flex-direction: column;
  .item {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 18px 0 rgb(31 38 135 / 20%);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: var(--glassmorphism-filter);
    margin: 5px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
