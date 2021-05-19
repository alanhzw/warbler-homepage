<!--
 * @Description:input输入框组件
 * @Date: 2021-04-24 21:26:33
 * @LastEditTime: 2021-05-12 11:07:00
 * @FilePath: \warbler-homepage\src\baseComponents\Input\Wh-input.vue
-->
<template>
  <div class="wh-input-box" :style='{width:width,padding:padding}'>
    <input class="wh-input" v-model="value" @change='validateInput' v-bind='$attrs'>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, computed, toRefs, onMounted } from 'vue';
import { RulesProp, handlerValidateInput } from './index';
import createMessage from 'base/Message/index';
import { emitter } from 'hooks/useMitt';

export default defineComponent({
  name: 'Wh-input',
  inheritAttrs: false, // 根元素不继承$attrs
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      default: () => [],
    },
    modelValue: String,
    width: {
      type: String,
      default: '100%',
    },
    padding: {
      type: String,
      default: '30px',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 定义一个数据类型 包括值 是否错误 错误信息
    const inputRef = reactive({
      // 使用计算属性的get,set方法来实现修改input值
      value: computed({
        get: () => props.modelValue || '',
        set: (val) => {
          emit('update:modelValue', val);
        },
      }),
      error: false,
      message: '',
    });
    // 验证函数
    const validateInput = () => {
      // 循环rules数组 返回结果  every若有一个没通过返回false  全通过返回true
      const isAllPass = props.rules?.every((rule) => {
        // 赋值错误信息
        inputRef.message = rule.message;
        // 执行验证函数
        return handlerValidateInput(inputRef.value, rule);
      });
      // 如果有没通过的验证,则激活error错误开关
      inputRef.error = !isAllPass;
      if (!isAllPass) {
        createMessage({ type: 'error', message: inputRef.message });
      }
      return isAllPass;
    };
    // 初始化的时候执行form-item-created,向form组件添加验证函数
    onMounted(() => {
      emitter.emit('form-item-created', validateInput);
    });
    return {
      ...toRefs(inputRef),
      validateInput,
    };
  },
});
</script>

<style lang='scss'>
.wh-input-box {
  font-size: 1px;
  .error-message {
    display: block;
    color: var(--theme-danger);
    font-size: 15px;
    padding: 10px 0 0 0px;

    .warning {
      font-size: 15px;
    }
  }

  .number {
    display: block;
    width: 30px;
  }
  .wh-input {
    color: var(--color-text);
    width: calc(100% - 40px);
    height: 30px;
    padding: 0 20px;
    outline: none;
    background: var(--glassmorphism-rgba);
    backdrop-filter: blur(15px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  }
  .wh-input::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
}
</style>
