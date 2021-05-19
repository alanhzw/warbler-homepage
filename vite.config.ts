/*
 * @Description:脚手架配置文件
 * @Date: 2021-04-15 11:38:49
 * @LastEditTime: 2021-04-26 21:30:03
 * @FilePath: \warbler-homepage\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  // 定义别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
    coms: path.resolve(__dirname, 'src/components'),
    assets: path.resolve(__dirname, 'src/assets'),
    router: path.resolve(__dirname, 'src/router'),
    styles: path.resolve(__dirname, 'src/styles'),
    utils: path.resolve(__dirname, 'src/utils'),
    base: path.resolve(__dirname, 'src/baseComponents'),
    hooks: path.resolve(__dirname, 'src/hooks'),
  },
  plugins: [vue()],
});
