<!--
 * @Description:
 * @Date: 2021-04-16 16:47:16
 * @LastEditTime: 2021-04-22 17:52:52
 * @FilePath: \warbler-homepage\src\baseComponents\Overlay\Overlay.vue
-->
<template>
  <!-- 传送门  此处Dom节点会被插在body里 -->
  <teleport to='body'>
    <!-- 过渡动画  添加了0.3s的淡入淡出  显得更加平滑 -->
    <transition name="base">
      <!-- 遮罩层 -->
      <div class="overly" :style="`z-index:${zIndex}`" v-if="show" @click='handleClick'></div>
    </transition>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Overlay',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const handleClick = () => {
      if (props.closeOnClickModal) {
        emit('close');
      }
      return;
    };
    return {
      handleClick,
    };
  },
});
</script>

<style lang='scss'>
.overly {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
  // 模糊滤镜
  backdrop-filter: blur(10px);
}
</style>
