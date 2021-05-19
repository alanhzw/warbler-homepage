<!--
 * @Description:message组件
 * @Date: 2021-04-28 10:23:04
 * @LastEditTime: 2021-05-12 13:58:04
 * @FilePath: \warbler-homepage\src\baseComponents\Message\Message.vue
-->
<template>
  <!-- 过渡效果 淡入淡出 并且移动一个身位 -->
  <transition name='message' @after-leave="$emit('destroy')">
    <div :class="classes" v-show='visiable' :style='styles' class="message">
      {{message}}
    </div>
  </transition>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, ref, onMounted, onUnmounted } from 'vue';

import { MessageType } from './index';
export default defineComponent({
  name: 'Message',
  props: {
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<MessageType>,
      default: 'default',
    },
    message: {
      type: String,
      default: '这是一条提示',
    },
    duration: {
      type: Number,
      default: 2000,
    },
    offsetNumber: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const classes = computed(() => ['message-' + props.type]);
    const visiable = ref(false);
    let timer: any = null;
    const startTimer = () => {
      timer = setTimeout(() => {
        visiable.value = false;
      }, props.duration);
    };
    const styles = computed(() => {
      return { top: `${(props.offsetNumber - 1) * 55 + 20}px` };
    });
    // 组件渲染完了显示
    onMounted(() => {
      visiable.value = true;
      // 开启定时器
      startTimer();
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    return {
      classes,
      visiable,
      styles,
    };
  },
});
</script>

<style lang='scss'>
.message {
  font-size: 14px;
  width: 300px;
  line-height: 40px;
  text-align: center;
  position: fixed;
  left: 50%;
  color: #fff;
  z-index: 2005;
  transform: translateX(-50%);
  transition: top 0.3s;
}
.message-default {
  background: rgba(78, 83, 82, 0.3);
  backdrop-filter: var(--glassmorphism-filter);
  border-radius: var(--glassmorphism-radius);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
.message-success {
  background: rgba(66, 206, 64, 0.5);
  backdrop-filter: var(--glassmorphism-filter);
  border-radius: var(--glassmorphism-radius);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
.message-error {
  background: rgba(226, 61, 61, 0.5);
  backdrop-filter: var(--glassmorphism-filter);
  border-radius: var(--glassmorphism-radius);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
</style>
