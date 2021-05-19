/*
 * @Description:mitt.js
 * @Date: 2021-05-11 17:57:53
 * @LastEditTime: 2021-05-11 17:58:13
 * @FilePath: \warbler-homepage\src\hooks\useMitt.ts
 */
import mitt, { Emitter } from 'mitt';
export const emitter: Emitter = mitt();
