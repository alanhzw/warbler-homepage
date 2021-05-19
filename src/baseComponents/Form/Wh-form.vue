<!--
 * @Description:form表单组件
 * @Date: 2021-04-24 22:00:43
 * @LastEditTime: 2021-05-11 18:02:33
 * @FilePath: \warbler-homepage\src\baseComponents\Form\Wh-form.vue
-->
<template>
  <form class='valid-form-container'>
    <slot name='default'></slot>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue';
import { ValidateFunc } from 'base/Form/index';
import { emitter } from 'hooks/useMitt';
export default defineComponent({
  name: 'ValidateForm',
  setup() {
    // 声明一个空数组  用来存放所有的验证函数
    let funcArr: ValidateFunc[] = [];
    // 验证函数
    const submitForm = () => {
      // 获取所有item的验证结果,有一个没有通过返回false 否则返回true
      const result = funcArr.every((func) => func());
      return result;
    };
    // 把item的验证函数添加到数组中
    const addValidater = (func: ValidateFunc | undefined) => {
      funcArr.push(func as ValidateFunc);
    };
    // 监听form-item-created事件,当有item触发的时候把验证函数添加到数组中
    emitter.on('form-item-created', addValidater);
    // 组件卸载的时候移除监听事件,数组重置为空
    onUnmounted(() => {
      emitter.off('form-item-created', addValidater);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>

<style lang='scss'>
</style>
