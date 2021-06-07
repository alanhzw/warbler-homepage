import { reactive } from 'vue';
/*
 * @Description:拖放hooks
 * @Date: 2021-06-02 14:35:21
 * @LastEditTime: 2021-06-07 15:34:40
 * @FilePath: \WarblerHomepage\src\hooks\useDraggable.ts
 */

export interface DragState {
  oldItemIndex: number;
  newItemIndex: number;
}

const useDrag = (emit: any, emitName: string) => {
  const dragState = reactive<DragState>({
    // 当前正在拖拽的元素索引
    oldItemIndex: -1,
    // 将插入的目标位置索引
    newItemIndex: -1,
  });

  // 开始拖拽时触发
  const handleDragstart = (index: number) => {
    dragState.oldItemIndex = index;
  };
  // 在目标位置上松开时触发
  const handleDrop = () => {
    // 如果位置没有发生改变 什么也不做
    if (dragState.newItemIndex === dragState.oldItemIndex) {
      return;
    }
    // 如果位置发生了改变
    emit(emitName, dragState.oldItemIndex, dragState.newItemIndex);
  };
  // 拖拽经过其他元素时触发
  const handleDragover = (index: number) => {
    dragState.newItemIndex = index;
  };
  // 拖拽结束时触发
  const handleDragend = () => {
    dragState.newItemIndex = -1;
    dragState.oldItemIndex = -1;
  };
  return {
    dragState,
    handleDragstart,
    handleDrop,
    handleDragover,
    handleDragend,
  };
};

export default useDrag;
