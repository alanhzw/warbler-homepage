/*
 * @Description:message组件
 * @Date: 2021-04-28 10:18:35
 * @LastEditTime: 2021-05-14 10:12:59
 * @FilePath: \warbler-homepage\src\baseComponents\Message\index.ts
 */
import Message from './Message.vue';
import { createVNode, render, VNode, reactive, computed } from 'vue';

// 类型
export type MessageType = 'success' | 'error' | 'default';

// 一条消息的数据
export interface MessageOptions {
  id?: string;
  type?: MessageType;
  message?: string;
  duration?: number;
  offsetNumber?: number;
}

export type MessageParams = MessageOptions | string;

export type MessageList = MessageOptions[];

// 存放所有的message实例  用来计算偏移量
const instances = reactive<VNode[]>([]);
const offsetNumber = computed(() => instances.length + 1);
const createMessage = (options: MessageParams) => {
  // 如果参数是string类型,就把它转换为options对象
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  // 把组件创建为虚拟节点  也就是一个组件实例
  const vnode = createVNode(Message, {
    ...options,
    offsetNumber: offsetNumber.value,
  });

  // 创建一个容器
  const container = document.createElement('div');

  // 把实例渲染到容器里
  render(vnode, container);
  // 将渲染后的结果 放到body上
  // 因为会多一个div 所以插入第一个孩子
  // 为什么不直接放到body里,要创建一个容器再取里面的内容呢   为了销毁组件 如果直接放在body里,就清空所有节点了
  document.body.appendChild(container.firstElementChild!);
  instances.push(vnode);
  // 给实例添加一个销毁方法
  vnode.props!.onDestroy = () => {
    instances.shift();
    instances.forEach((item: any) => {
      item.component.props.offsetNumber -= 1;
    });
    // 移除dom
    render(null, container);
  };
};

export default createMessage;
