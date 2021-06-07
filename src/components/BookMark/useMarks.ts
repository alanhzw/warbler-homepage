/*
 * @Description:收藏夹组件中跟书签相关的操作
 * @Date: 2021-04-26 16:23:29
 * @LastEditTime: 2021-06-07 17:18:38
 * @FilePath: \WarblerHomepage\src\components\BookMark\useMarks.ts
 */

import { ComputedRef } from 'vue';
import { MarkProps } from 'coms/MarkList/index';
import defaultImgUrl from 'assets/favicon.png';
import createMessage from 'base/Message/index';

const useMarks = (markList: ComputedRef<MarkProps[]>) => {
  const marks = markList;
  // 添加书签
  const addMark = (state: MarkProps) => {
    marks.value.push({
      icon: state.icon || defaultImgUrl,
      title: state.title,
      explain: state.explain,
      targetUrl: state.targetUrl,
    });
    createMessage({ type: 'success', message: '添加书签成功 !' });
  };
  // 删除书签
  const deleteMark = (index: number) => {
    marks.value.splice(index, 1);
    createMessage({ type: 'success', message: '删除书签成功 !' });
  };
  // 修改书签
  const updateMark = (index: number, state: MarkProps) => {
    marks.value[index] = { ...state };
    createMessage({ type: 'success', message: '修改书签成功 !' });
  };
  // 修改书签索引
  const changeMarkIndex = (oldItemIndex: number, newItemIndex: number) => {
    // 删除老的
    const changeItem = marks.value.splice(oldItemIndex, 1)[0];
    // 在列表中目标位置增加新的
    marks.value.splice(newItemIndex, 0, changeItem);
  };
  return {
    addMark,
    deleteMark,
    updateMark,
    changeMarkIndex,
  };
};
export default useMarks;
