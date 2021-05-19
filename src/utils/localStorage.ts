/*
 * @Description:有关localStorage的方法
 * @Date: 2021-04-26 11:34:42
 * @LastEditTime: 2021-05-14 12:00:37
 * @FilePath: \warbler-homepage\src\utils\localStorage.ts
 */

export const getItem = (item: string) => {
  const result = localStorage.getItem(item);
  if (result) {
    try {
      return JSON.parse(result);
    } catch (error) {
      return '';
    }
  }
  return '';
};

export const setItem = (item: string, data: string) => {
  localStorage.setItem(item, data);
};

export const removeItem = (item: string) => {
  localStorage.removeItem(item);
};
