/*
 * @Description:程序主入口
 * @Date: 2021-04-15 11:38:49
 * @LastEditTime: 2021-04-27 13:57:58
 * @FilePath: \warbler-homepage\src\main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
// 引入全局样式
import 'styles/index.scss';
// 引入rem布局
// import 'utils/rem';

createApp(App).mount('#app');
