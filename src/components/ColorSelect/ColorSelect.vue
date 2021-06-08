<!--
 * @Description:
 * @Date: 2021-06-03 16:06:43
 * @LastEditTime: 2021-06-07 18:00:18
 * @FilePath: \WarblerHomepage\src\components\ColorSelect\ColorSelect.vue
-->
<template>
  <div class="color-select-box">
    <div>{{colorTitle}}</div>
    <input type="color" name="color" class="color" v-model='state.colorValue'>
  </div>
</template>

<script setup lang='ts'>
import { useContext, defineProps, defineEmit, reactive, computed } from 'vue';
import type { ColorState } from 'coms/ColorSelect/index';
const props = defineProps({
  colorTitle: {
    type: String,
    default: '颜色',
  },
  modelValue: String,
});
const emit = defineEmit(['update:modelValue']);
const state = reactive<ColorState>({
  // 使用计算属性的get,set方法来实现修改input值
  colorValue: computed({
    get: () => props.modelValue || '',
    set: (val) => {
      emit('update:modelValue', val);
    },
  }),
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
