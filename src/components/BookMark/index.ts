/*
 * @Description:收藏夹组件的一些基础配置,数据,接口等
 * @Date: 2021-04-26 11:45:42
 * @LastEditTime: 2021-05-17 19:33:01
 * @FilePath: \warbler-homepage\src\components\BookMark\index.ts
 */

import { LabelsProps } from 'coms/LabelList/index';

// 标签列表
export type LabelListProps = LabelsProps[];

// 初始数据
export const initData: LabelListProps = [
  {
    title: '常用网站',
    marks: [
      {
        title: '百度',
        icon: 'https://www.baidu.com/favicon.ico',
        targetUrl: 'https://www.baidu.com',
        explain: '百度一下,你就知道',
      },
    ],
  },
];

// 数据类型
export interface BookmarkState {
  warblerData: LabelListProps;
  editMode: boolean;
  motto: string;
}

const mottoList = [
  '凡所有相，皆为虚妄。若见诸相非相，即见如来',
  '不取于相,如如不动',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
  '万法皆空,因果不空',
];

export const getMotto = () => {
  const random = Math.floor(Math.random() * mottoList.length);
  return mottoList[random];
};
