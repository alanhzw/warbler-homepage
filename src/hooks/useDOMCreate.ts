/*
 * @Description:创建DOM节点的hook函数 在body中插入一个自定义id的div节点 setup函数在执行时等同于created 所以没必要写入生命周期
 * @Date: 2021-04-16 16:28:45
 * @LastEditTime: 2021-05-06 18:12:14
 * @FilePath: \warbler-homepage\src\hooks\useDOMCreate.ts
 */
import { onUnmounted } from 'vue';

const useDOMCreate = (nodeId: string): HTMLDivElement => {
  // 生成一个div的节点
  const node = document.createElement('div');
  // 给赋值一个class
  node.className = nodeId;
  // 在body中插入div节点
  document.body.appendChild(node);
  // 在组件卸载的时候移除dom节点
  onUnmounted(() => {
    document.body.removeChild(node);
  });
  return node;
};
export default useDOMCreate;
