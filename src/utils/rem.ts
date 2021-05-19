/*
 * @Description:rem布局入口文件
 * @Date: 2021-04-16 14:13:13
 * @LastEditTime: 2021-04-16 15:17:56
 * @FilePath: \warbler-homepage\src\utils\rem.ts
 */

function setRem(): void {
  // 获取浏览器可视区域尺寸
  const clientWidth = document.documentElement.clientWidth;
  // 设置HTML的根节点的大小 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
  const baseSize = clientWidth > 1000 ? 100 : 50;
  // 设置一个用于计算缩放比的基准尺寸  客户端是1920 移动端是375
  const baseScale = clientWidth > 800 ? 1920 : 375;
  // 计算缩放比  如果可视区域大小为1920 那么缩放比就是1
  const scale = clientWidth / baseScale;
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}

// 初始化
setRem();

// 改变窗口大小时重新设置 rem
window.addEventListener('resize', () => {
  setRem();
});
