<!--
 * @Description:定制主题组件
 * @Date: 2021-06-03 16:42:35
 * @LastEditTime: 2021-06-03 18:11:42
 * @FilePath: \WarblerHomepage\src\components\Theme\Theme.vue
-->
<template>
  <!-- <i class="iconfont theme-icon" @click='openDialog'>&#xe66b;</i> -->
  <!-- 主题定制的弹窗 -->
  <Dialog :dialog-visible='state.isShowThemeDialog' @cancle='closeThemeDialog' @confirm='submit' title='定制主题' class="theme-dialog" width='500px'>
    <color-select></color-select>
  </Dialog>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import Dialog from 'base/Dialog/Dialog.vue';
import type { ThemeState } from 'coms/Theme/index';
import ColorSelect from 'coms/ColorSelect/ColorSelect.vue';

const state = reactive<ThemeState>({
  // 是否展示定制主题的弹窗
  isShowThemeDialog: false,
});
// 关闭弹窗
const closeThemeDialog = () => {
  state.isShowThemeDialog = false;
};
// 打开弹窗
const openDialog = () => {
  state.isShowThemeDialog = true;
};
// 保存修改
const submit = () => {
  // todos
};
</script>

<style lang='scss'>
.theme-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 3;
}
</style>
