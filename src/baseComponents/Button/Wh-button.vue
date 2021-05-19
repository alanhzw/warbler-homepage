<!--
 * @Description:按钮组件
 * @Date: 2021-04-22 16:56:06
 * @LastEditTime: 2021-05-06 17:55:56
 * @FilePath: \warbler-homepage\src\baseComponents\Button\Wh-button.vue
-->
<template>
  <div class="wh-button-box">
    <div class="btn">
      <a :class="{animation:useAnimation}" href="#">{{title}}</a>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Wh-button',
  props: {
    title: {
      type: String,
      default: '按钮',
    },
    backgroundColor: {
      type: String,
      default: 'rgba(16, 143, 111, 0.3)',
    },
    useAnimation: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang='scss'>
.wh-button-box {
  font-size: 15px;
  .btn {
    position: relative;
    min-width: 70px;
    height: 30px;

    &:hover .animation::before {
      transform: skewX(45deg) translateX(200%);
    }
    &:hover .animation {
      background: v-bind('backgroundColor');
    }

    a {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: var(--color-text);
      z-index: 1;
      font-weight: 700;
      text-decoration: none;
      overflow: hidden;
      transition: 0.5s;
      backdrop-filter: blur(15px);
      padding: 0 5px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
        transform: skewX(45deg) translateX(-150%);
        transition: 0.5s;
      }
    }
  }
}
</style>
