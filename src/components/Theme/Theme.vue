<!--
 * @Description:定制主题组件
 * @Date: 2021-06-03 16:42:35
 * @LastEditTime: 2021-06-09 10:08:53
 * @FilePath: \WarblerHomepage\src\components\Theme\Theme.vue
-->
<template>
  <i class="iconfont theme-icon" @click='openDialog'>&#xe66b;</i>
  <!-- 主题定制的弹窗 -->
  <Dialog ref='dialog' :dialog-visible='state.isShowThemeDialog' @cancle='closeThemeDialog' @confirm='submit' title='定制主题' class="theme-dialog" width='500px'>
    <color-select v-for='(item) in state.theme' :key='item.title' v-model='item.content'></color-select>
  </Dialog>
</template>

<script setup lang='ts'>
import { reactive, watch, ref, onMounted } from 'vue';
import Dialog from 'base/Dialog/Dialog.vue';
import type { ThemeState, ThemeType } from 'coms/Theme/index';
import { defaultTheme } from 'coms/Theme/index';

import ColorSelect from 'coms/ColorSelect/ColorSelect.vue';
import { setCssVariables } from 'utils/cssVariables';
import localforage from 'localforage';

const dialog = ref<any>(null);

onMounted(() => {
  console.log('🚀🚀~ dialog:', dialog.value.dialogVisible);
});
const state = reactive<ThemeState>({
  // 是否展示定制主题的弹窗
  isShowThemeDialog: false,
  theme: defaultTheme,
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
// 获取初始数据
localforage.getItem('THEME_DATA').then((value) => {
  // 查询数据库  如果存在数据 使用库里的数据  否则使用初始默认数据
  if (value) {
    const result = JSON.parse(value as string) as ThemeType;
    state.theme = result;
  } else {
    state.theme = defaultTheme;
  }
});
watch(
  () => state.theme,
  () => {
    state.theme.forEach((item) => {
      setCssVariables(item.attribute, item.content);
    });
  },
  { immediate: true, deep: true }
);
</script>

<style lang='scss'>
.theme-icon {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 3;
}
</style>
