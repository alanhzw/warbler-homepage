/*
 * @Description:css变量相关操作函数
 * @Date: 2021-04-25 14:15:59
 * @LastEditTime: 2021-06-08 10:15:45
 * @FilePath: \WarblerHomepage\src\utils\cssVariables.ts
 */

// 新增或者修改变量
export const setCssVariables = (key: string, value: string) => {
  document.documentElement.style.setProperty(key, value);
};

// 读取变量
export const getPropertyValue = (key: string) => {
  document.documentElement.style.getPropertyValue(key).trim();
};

// 删除变量
export const removeProperty = (key: string) => {
  document.documentElement.style.removeProperty(key);
};
