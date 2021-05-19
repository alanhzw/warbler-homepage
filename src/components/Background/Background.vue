<!--
 * @Description:背景组件
 * @Date: 2021-04-16 15:21:57
 * @LastEditTime: 2021-05-17 19:44:48
 * @FilePath: \warbler-homepage\src\components\Background\Background.vue
-->
<template>
  <!-- 背景组件  鼠标右键点击开启高斯模糊效果 -->
  <div class="back-box">
    <!-- 一个黑色半透明的遮罩层 使图片不那么光亮耀眼 -->
    <div class="cover"></div>
    <!-- 这个是获取必应每日壁纸的接口  后续支持自定义上传 -->
    <img src="https://api.dujin.org/bing/1920.php" class='back' />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Background',
  setup() {
    return {};
  },
});
</script>

<style lang='scss'>
.back-box {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -9;
  .cover {
    background-image: radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -8;
  }
  .back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    pointer-events: none;
    filter: blur(0px);
    transition: 0.25s;
    z-index: -9;
  }
}
</style>
