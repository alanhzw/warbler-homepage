/*
 * @Description:收藏夹组件中跟标签相关的操作
 * @Date: 2021-04-26 16:15:26
 * @LastEditTime: 2021-05-12 11:18:05
 * @FilePath: \warbler-homepage\src\components\BookMark\useLabels.ts
 */
import { LabelListProps } from './index';
import createMessage from 'base/Message/index';
const useLabels = (warblerData: LabelListProps) => {
  // 添加标签
  const addLabel = (title: string) => {
    warblerData.push({
      title: title,
      marks: [],
    });
    createMessage({ type: 'success', message: '添加标签成功 !' });
  };
  // 删除标签
  const deleteLabel = (index: number) => {
    warblerData.splice(index, 1);
    createMessage({ type: 'success', message: '删除标签成功 !' });
  };
  // 修改标签
  const updateLabel = (index: number, title: string) => {
    warblerData[index].title = title;
    createMessage({ type: 'success', message: '修改标签成功 !' });
  };
  return {
    addLabel,
    deleteLabel,
    updateLabel,
  };
};
export default useLabels;
