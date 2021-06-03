<!--
 * @Description:标签列表组件
 * @Date: 2021-04-21 19:10:21
 * @LastEditTime: 2021-06-03 14:48:41
 * @FilePath: \WarblerHomepage\src\components\LabelList\LabelList.vue
-->
<template>
  <div class="label-list-box">
    <!-- 循环生成标签列表 -->
    <div :draggable="editMode" @dragend="dragendFn()" @dragstart="handleDragstart(index)" @drop.prevent="handleDrop()" @dragover.prevent="handleDragover(index)" v-for='(item,index) in labelList' :key='index' class="label" @click.prevent='changeLabel(index ,"click")' @mouseenter="changeLabel(index,'hover')" @mouseleave="changeLabel(-1,'hover')" :class='{currentClick:currentId===index,currentHover:currentHoverLabel===index,isDragging:index === newItemIndex}'>
      <!-- 标签标题 -->
      <i class="iconfont">&#xe610;</i>
      <div :title='item.title' class="label-title">
        {{item.title}}
      </div>
      <div class="edit-icon" v-if="currentHoverLabel===index && editMode">
        <i class="iconfont" @click.stop="updateLabel(item.title,index)">&#xe623;</i>
        <i class="iconfont" @click.stop='deleteLabel(index)'>&#xe60f;</i>
      </div>
    </div>
  </div>
  <!-- 添加单个标签的弹窗 -->
  <Dialog :dialog-visible='isShowLabelDialog' @cancle='closeLabelDialog' @confirm="handleLabel(handleType)" :title='dialogTitle'>
    <wh-from ref='form'>
      <wh-input :rules='rules' type="text" v-model="labelTitle" placeholder="请输入标签名称" padding='50px 30px' maxlength='10'></wh-input>
    </wh-from>
  </Dialog>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref, computed, onUnmounted, reactive, toRefs } from 'vue';
import { LabelListProps } from 'coms/BookMark/index';
import { HandleLabelType, LabelState } from 'coms/LabelList/index';
import WhFrom from 'base/Form/Wh-form.vue';
import Dialog from 'base/Dialog/Dialog.vue';
import useDialog from 'coms/LabelList/useDialog';
import WhInput from 'base/Input/Wh-input.vue';
import { emitter } from 'hooks/useMitt';
import useDrag from 'hooks/useDraggable';
export default defineComponent({
  name: 'LabelList',
  props: {
    labelList: {
      type: Array as PropType<LabelListProps>,
      required: true,
      default: () => [],
    },
    editMode: {
      type: Boolean,
      default: false,
    },
    currentId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Dialog,
    WhInput,
    WhFrom,
  },
  emits: ['change-label', 'add-label', 'delete-label', 'update-label', 'change-label-index'],
  setup(props, { emit }) {
    // 获取form元素
    const form = ref<any>(null);

    // 导出有关Dialog的属性,方法
    const { dialogState, showLabelDialog, closeLabelDialog } = useDialog();
    // 导出拖拽相关的方法
    const { handleDragstart, handleDrop, handleDragover, handleDragend, dragState } = useDrag(emit, 'change-label-index');
    const state = reactive<LabelState>({
      // 标志当前是何种操作
      handleType: 'add',
      // 用于高亮当前点击的标签
      currentClickLabel: 0,
      // 用于高亮鼠标划过的标签
      currentHoverLabel: -1,
      // 定义弹窗标题名称
      dialogTitle: computed(() => {
        if (state.handleType === 'add') {
          return '添加标签';
        } else {
          return '修改标签';
        }
      }),
    });

    // 切换标签
    const changeLabel = (currentId: number, type: string) => {
      if (type === 'click') {
        state.currentClickLabel = currentId;
        emit('change-label', currentId);
      }
      if (type === 'hover') {
        state.currentHoverLabel = currentId;
      }
    };
    // 操作标签
    const handleLabel = (type: HandleLabelType) => {
      const result = form.value.submitForm();
      if (result) {
        if (type === 'add') {
          emit('add-label', dialogState.labelTitle);
          // 添加完成后,修改当前标签为新添加的这个
          changeLabel(props.labelList.length - 1, 'click');
        }
        if (type === 'update') {
          emit('update-label', state.currentClickLabel, dialogState.labelTitle);
        }
        closeLabelDialog();
      }
    };
    // 添加标签
    const addLabel = () => {
      state.handleType = 'add';
      showLabelDialog();
    };

    // 修改标签
    const updateLabel = (value: string, index: number) => {
      state.handleType = 'update';
      state.currentClickLabel = index;
      showLabelDialog(value);
    };
    // 删除标签
    const deleteLabel = (index: number) => {
      state.currentClickLabel = index;
      emit('delete-label', state.currentClickLabel);
      emit('change-label', 0);
      changeLabel(0, 'click');
    };

    // 监听事件,打开添加标签弹窗
    emitter.on('add-label', addLabel);
    // 显式卸载
    onUnmounted(() => {
      emitter.off('add-label', addLabel);
    });
    // 停止拖拽时触发
    const dragendFn = () => {
      changeLabel(dragState.newItemIndex, 'click');
      handleDragend();
    };
    return {
      form,
      changeLabel,
      ...toRefs(state),
      ...toRefs(dialogState),
      ...toRefs(dragState),
      showLabelDialog,
      closeLabelDialog,
      handleLabel,
      addLabel,
      updateLabel,
      deleteLabel,
      handleDrop,
      handleDragstart,
      handleDragover,
      dragendFn,
    };
  },
});
</script>

<style lang='scss'>
.label-list-box {
  height: 100%;

  .currentHover {
    background: var(--color-label-title-hover);
    backdrop-filter: var(--glassmorphism-filter);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
    color: var(--color-label-color-hover);
  }
  .currentClick {
    background: var(--color-label-title-click);
    backdrop-filter: var(--glassmorphism-filter);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  }

  .label {
    font-size: 14px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: var(--color-label-title);
    border: none;
    position: relative;
    padding: 10px 5px;

    .label-title {
      padding-left: 10px;
      width: 120px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .edit-icon {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      i {
        font-size: 12px;
        margin: 4px 8px 2px 0px;
      }
    }
  }
  .isDragging {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #8307ea;
      top: -1px;
      left: 0px;
      border-radius: 2px;
      box-shadow: 0px 5px 26px 2px #4646cc;
    }
  }
}
</style>
