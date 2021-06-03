<!--
 * @Description:Dialog弹窗组件
 * @Date: 2021-04-16 16:17:47
 * @LastEditTime: 2021-06-03 16:59:06
 * @FilePath: \WarblerHomepage\src\baseComponents\Dialog\Dialog.vue
-->
<template>
  <!-- 遮罩层 -->
  <overlay v-if='dialogVisible' :show='dialogVisible' @close='onCancle' :close-on-click-modal='true'></overlay>
  <!-- 传送门  此处Dom节点会被插在.Dialog里 -->
  <teleport to='.Dialog'>
    <div class="dialog-box" v-bind='$attrs'>
      <!-- 过渡动画  添加了0.3s的淡入淡出  并且有20px的移动 显得更加平滑 -->
      <transition name="dialog">
        <div class="dialog-content" v-if='dialogVisible' :style="`width:${width};margin-top:${top}`">
          <!-- Dialog组件header部分 -->
          <div class="dialog-header">
            <h5 class="dialog-title">{{title}}</h5>
          </div>
          <!-- Dialog组件内容插槽 -->

          <slot>
          </slot>

          <!-- Dialog组件footer部分 -->
          <div class="dialog-footer">
            <wh-button @click="onConfirm" class="footer-btn" title='确认' :use-animation="true" :background-color="`rgba(160, 21, 114, 0.3)`"></wh-button>
            <wh-button @click="onCancle" class="footer-btn" title='取消' :use-animation="true" v-if='showCancleButton'></wh-button>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import useDOMCreate from 'hooks/useDOMCreate';
import Overlay from 'base/Overlay/Overlay.vue';
import WhButton from 'base/Button/Wh-button.vue';

export default defineComponent({
  components: {
    Overlay,
    WhButton,
  },
  name: 'Dialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '提示',
    },
    width: {
      type: String,
      default: '400px',
    },
    top: {
      type: String,
      default: '15vh',
    },
    showCancleButton: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['cancle', 'confirm'],
  setup(props, { emit }) {
    // 创建dom节点 .Dialog
    if (!document.querySelector('.Dialog')) {
      useDOMCreate('Dialog');
    }
    // 关闭Dialog
    const onCancle = () => {
      emit('cancle');
    };
    const onConfirm = () => {
      emit('confirm');
    };
    return {
      onCancle,
      onConfirm,
    };
  },
});
</script>

<style lang='scss'>
.dialog-box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2001;

  .dialog-content {
    width: 100%;
    background: var(--glassmorphism-rgba);
    backdrop-filter: var(--glassmorphism-filter);
    border-radius: var(--glassmorphism-radius);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);

    .dialog-header {
      .dialog-title {
        font-size: 20px;
        padding: 10px 0 0 10px;
      }
    }
    .dialog-body {
      width: 100%;
    }
    .dialog-footer {
      display: flex;
      justify-content: flex-end;

      .footer-btn {
        margin: 0 20px 20px 0;
      }
    }
  }
}
</style>
