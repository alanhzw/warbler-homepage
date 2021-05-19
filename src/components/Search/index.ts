/*
 * @Description:搜索组件
 * @Date: 2021-05-13 10:45:27
 * @LastEditTime: 2021-05-13 17:30:11
 * @FilePath: \warbler-homepage\src\components\Search\index.ts
 */
export type SearchType = 'baidu' | 'biying' | 'google' | 'fanyi';

export interface IconData {
  icon: string;
  title: string;
  type: SearchType;
}

export type IconDataList = IconData[];

export const initData: IconDataList = [
  {
    icon: '&#xe668;',
    title: '百度搜索',
    type: 'baidu',
  },
  {
    icon: '&#xe600;',
    title: '必应搜索',
    type: 'biying',
  },
  {
    icon: '&#xe606;',
    title: '谷歌搜索',
    type: 'google',
  },
  {
    icon: '&#xe602;',
    title: '百度翻译',
    type: 'fanyi',
  },
];
