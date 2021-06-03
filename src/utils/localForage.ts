/*
 * @Description:有关localForage的方法
 * @Date: 2021-04-26 11:34:42
 * @LastEditTime: 2021-06-03 15:07:04
 * @FilePath: \WarblerHomepage\src\utils\localForage.ts
 */

import localforage from 'localforage';

// 获取数据
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

// 存储数据
export const setItem = (item: string, data: string) => {
  localforage
    .setItem(item, data)
    .then(() => {
      // todos
    })
    .catch(() => {
      console.log('🚀🚀~ 浏览器数据库存储失败');
    });
};

// 清除某一条数据
export const removeItem = (item: string) => {
  localforage
    .removeItem(item)
    .then(() => {
      // todos
    })
    .catch(() => {
      console.log('🚀🚀~ 浏览器数据库移除失败');
    });
};

// 清空数据库
export const clear = () => {
  localforage
    .clear()
    .then(() => {
      // todos
    })
    .catch(() => {
      console.log('🚀🚀~ 浏览器数据库清空失败');
    });
};
