/*
 * @Description:文件上传和下载的方法
 * @Date: 2021-05-13 18:20:44
 * @LastEditTime: 2021-05-17 10:50:51
 * @FilePath: \warbler-homepage\src\utils\file.ts
 */

import createMessage from 'base/Message/index';

// 文件下载
export const downloadFile = (jsonStr: any) => {
  // 将数据转换为字符串
  jsonStr = JSON.stringify(jsonStr);
  // 创建 blob 对象
  const blob = new Blob([jsonStr]);
  // 创建一个a标签
  const el = document.createElement('a');
  // 创建一个 URL 对象并传给 a 的 href
  el.href = URL.createObjectURL(blob);
  // 设置下载的默认文件名
  el.download = '流莺书签数据备份.json';
  // 模拟点击链接进行下载
  el.click();
};
// 文件上传
export const uploadFile = (e: any) => {
  return new Promise((reject) => {
    // 如果没有选择文件就什么也不做
    if (e.target.value === '' || e.target.files.length < 1) {
      return;
    }
    // 如果不是json格式的文件,给出提示
    if (e.target.files[0].type !== 'application/json') {
      createMessage('请上传由本站导出的json格式的文件 !');
      return;
    }
    // 创建 FileReader对象
    const reader = new FileReader();
    // 把文件读取为字符串
    reader.readAsText(e.target.files[0]);
    // 文件读取完成
    reader.onload = function (ev: any) {
      reject(ev);
    };
  });
};
