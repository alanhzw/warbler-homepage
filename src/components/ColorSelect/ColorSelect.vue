<!--
 * @Description:
 * @Date: 2021-06-03 16:06:43
 * @LastEditTime: 2021-06-03 17:16:13
 * @FilePath: \WarblerHomepage\src\components\ColorSelect\ColorSelect.vue
-->
<template>
  <div class="color-select-box">
    <div>{{colorTitle}}</div>
    <input type="color" name="color" class="color" v-model='state.colorValue'>
  </div>
</template>

<script setup lang='ts'>
import { useContext, defineProps, defineEmit, reactive, toRefs } from 'vue';
import type { ColorState } from 'coms/ColorSelect/index';
const props = defineProps({
  colorTitle: {
    type: String,
    default: '颜色',
  },
});
const state = reactive<ColorState>({
  colorValue: '',
});
</script>

<style lang='scss'>
.color-select-box {
  display: flex;
  justify-content: space-around;
  .color {
    border: none;
    //外层容器
    &::-webkit-color-swatch-wrapper {
    }
    //内容区域
    &::-webkit-color-swatch {
      border: none;
    }
  }
  input[type='color'] {
    background-color: transparent;
  }
}
</style>
