/*
 * @Description:收藏夹组件中跟书签相关的操作
 * @Date: 2021-04-26 16:23:29
 * @LastEditTime: 2021-05-17 16:07:56
 * @FilePath: \warbler-homepage\src\components\BookMark\useMarks.ts
 */

import { Ref } from 'vue';
import { LabelListProps } from 'coms/BookMark/index';
import { MarkProps } from 'coms/MarkList/index';
import defaultImgUrl from 'assets/favicon.png';
import createMessage from 'base/Message/index';

const useMarks = (currentId: Ref<number>, warblerData: LabelListProps) => {
  // 添加书签
  const addMark = (state: MarkProps) => {
    warblerData[currentId.value].marks.push({
      icon: state.icon || defaultImgUrl,
      title: state.title,
      explain: state.explain,
      targetUrl: state.targetUrl,
    });
    createMessage({ type: 'success', message: '添加书签成功 !' });
  };
  // 删除书签
  const deleteMark = (index: number) => {
    warblerData[currentId.value].marks.splice(index, 1);
    createMessage({ type: 'success', message: '删除书签成功 !' });
  };
  // 修改书签
  const updateMark = (index: number, state: MarkProps) => {
    warblerData[currentId.value].marks[index] = { ...state };
    createMessage({ type: 'success', message: '修改书签成功 !' });
  };
  return {
    addMark,
    deleteMark,
    updateMark,
  };
};
export default useMarks;
