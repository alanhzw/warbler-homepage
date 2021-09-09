/*
 * @Description:收藏夹组件中跟标签相关的操作
 * @Date: 2021-04-26 16:15:26
 * @LastEditTime: 2021-09-09 11:26:51
 * @FilePath: \WarblerHomepage\src\components\BookMark\useLabels.ts
 */
import { LabelListProps, BookmarkState } from './index';

import createMessage from 'base/Message/index';
const useLabels = (state: BookmarkState) => {
  // 添加标签
  const addLabel = (title: string) => {
    state.warblerData.push({
      title: title,
      marks: [],
    });
    createMessage({ type: 'success', message: '添加标签成功 !' });
  };
  // 删除标签
  const deleteLabel = (index: number) => {
    state.warblerData.splice(index, 1);
    createMessage({ type: 'success', message: '删除标签成功 !' });
  };
  // 修改标签
  const updateLabel = (index: number, title: string) => {
    state.warblerData[index].title = title;
    createMessage({ type: 'success', message: '修改标签成功 !' });
  };
  // 修改书签索引
  const changeLabelIndex = (oldItemIndex: number, newItemIndex: number) => {
    // 删除老的
    const changeItem = state.warblerData.splice(oldItemIndex, 1)[0];
    // 在列表中目标位置增加新的
    state.warblerData.splice(newItemIndex, 0, changeItem);
  };
  return {
    addLabel,
    deleteLabel,
    updateLabel,
    changeLabelIndex,
  };
};
export default useLabels;
