/*
 * @Description:收藏夹组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:45:42
 * @LastEditTime: 2022-03-11 13:45:57
 * @FilePath: \warbler-homepage\src\components\BookMark\index.ts
 */

import { LabelsProps } from 'coms/LabelList/index';
import data from './data';
// 标签列表
export type LabelListProps = LabelsProps[];

// 初始数据
export const initData: any = data;

// 数据类型
export interface BookmarkState {
  warblerData: LabelListProps;
  editMode: boolean;
  motto: string;
}

const mottoList = [
  '凡所有相，皆为虚妄。若见诸相非相，即见如来',
  '不取于相，如如不动',
  '万法皆空，因果不空',
  '悲凉才是人生常态，快乐才是意外',
];

export const getMotto = () => {
  const random = Math.floor(Math.random() * mottoList.length);
  return mottoList[random];
};
