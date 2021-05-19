/*
 * @Description:操作栏
 * @Date: 2021-05-11 17:28:33
 * @LastEditTime: 2021-05-17 10:27:41
 * @FilePath: \warbler-homepage\src\components\ActionBar\index.ts
 */

export type DataFormatType = 'warblerData' | 'themeData';
export type DataFormatArray = DataFormatType[];
// 所有用到的数据  书签数据,主题数据
export const dataFormat: DataFormatArray = ['warblerData', 'themeData'];

// 单个操作栏属性
export interface ActionBarItem {
  icon: string;
  title: string;
}
// 操作栏列表
export type ActionBarList = ActionBarItem[];

// 初始数据
export const initData: ActionBarList = [
  {
    title: '添加标签',
    icon: '&#xe793;',
  },
  {
    title: '编辑模式',
    icon: '&#xe653;',
  },
  {
    title: '上传数据',
    icon: '&#xe601;',
  },
  {
    title: '下载数据',
    icon: '&#xe625;',
  },
  {
    title: '使用帮助',
    icon: '&#xe636;',
  },
];
