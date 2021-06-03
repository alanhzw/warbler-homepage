/*
 * @Description:有关localForage的方法
 * @Date: 2021-04-26 11:34:42
 * @LastEditTime: 2021-06-03 14:55:48
 * @FilePath: \WarblerHomepage\src\utils\localForage.ts
 */

import localforage from 'localforage';

export const getItem = (item: string) => {
  localforage.getItem(item).then((value) => {
    const result = JSON.stringify(value);
    if (result) {
      try {
        return JSON.parse(result);
      } catch (error) {
        console.log('🚀🚀~ 获取浏览器数据库失败');
        return '';
      }
    }
    return '';
  });
};

export const setItem = (item: string, data: string) => {
  localforage.setItem(item, data);
};

export const removeItem = (item: string) => {
  localforage.removeItem(item);
};
