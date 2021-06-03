<!--
 * @Description:VUE根节点
 * @Date: 2021-04-15 11:38:49
 * @LastEditTime: 2021-06-03 16:25:55
 * @FilePath: \WarblerHomepage\src\App.vue
-->
<template>
  <social-contact></social-contact>
  <Bookmark></Bookmark>
  <!-- <Background /> -->
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import Bookmark from 'coms/BookMark/Bookmark.vue';
import SocialContact from 'coms/SocialContact/SocialContact.vue';
import Background from 'coms/Background/Background.vue';
export default defineComponent({
  name: '',
  components: {
    SocialContact,
    Bookmark,
    // Background,
  },
  setup() {
    return {};
  },
});
</script>

<style lang='scss'>
// 给根组件开启相对定位  方便子元素进行布局
#app {
  position: relative;
}
</style>
