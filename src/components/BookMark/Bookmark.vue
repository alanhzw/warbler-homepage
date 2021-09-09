<!--
 * @Description:收藏夹组件
 * @Date: 2021-04-16 15:49:28
 * @LastEditTime: 2021-09-09 11:30:39
 * @FilePath: \WarblerHomepage\src\components\BookMark\Bookmark.vue
-->
<template>
  <!-- 组件根节点 -->
  <div class="my-book-mark">
    <!-- 左侧标签栏 -->
    <div class="left-part">
      <div class="left-top-part">
        <img src="../../assets/logo.png"
             class="logo">
      </div>
      <div class="left-middle-part">
        <label-list @change-label-index='changeLabelIndex'
                    :current-id="currentId"
                    :label-list='warblerData'
                    @change-label='changeLabel'
                    @add-label="addLabel"
                    @delete-label="deleteLabel"
                    @update-label="updateLabel"
                    :edit-mode='editMode'></label-list>
      </div>
      <div class="left-bottom-part">
        <action-bar v-model='editMode'></action-bar>
      </div>
    </div>
    <!-- 右侧详情栏 搜索栏 -->
    <div class="right-part">
      <!-- 上方搜索栏部分 -->
      <div class="right-top-part">
        <!-- <Theme /> -->
        <Search />
      </div>
      <!-- 下方列表详情部分 -->
      <div class="right-middle-part">
        <mark-list :mark-list="markList"
                   @add-mark="addMark"
                   @delete-mark="deleteMark"
                   @update-mark="updateMark"
                   :edit-mode='editMode'
                   @change-mark-index='changeMarkIndex'></mark-list>
      </div>
      <div class="right-bottom-part">
        <div class="quit-edit-mode"
             v-if='editMode'
             @click='editModeFn'>
          退出编辑模式
        </div>
        <div class="motto-text">
          「 {{motto}} 」
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, toRefs, watch, reactive, onUnmounted, computed } from 'vue';
import { initData, LabelListProps, BookmarkState, getMotto } from 'coms/BookMark/index';
import { emitter } from 'hooks/useMitt';
import LabelList from 'coms/LabelList/LabelList.vue';
import MarkList from 'coms/MarkList/MarkList.vue';
import useLabels from './useLabels';
import useMarks from './useMarks';
import createMessage from 'base/Message/index';
import ActionBar from 'coms/ActionBar/ActionBar.vue';
import Search from 'coms/Search/Search.vue';
import Theme from '../Theme/Theme.vue';
import localforage from 'localforage';

export default defineComponent({
  name: 'Bookmark',
  components: {
    LabelList,
    MarkList,
    ActionBar,
    Search,
    // Theme,
  },
  setup() {
    const state = reactive<BookmarkState>({
      // 整个项目所需的数据  如果localFroge里面有就用  没有就用初始值  (getItem('WARBLER_DATA') as unknown as LabelListProps) || initData
      warblerData: [],
      // 是否启用编辑模式
      editMode: false,
      // 格言
      motto: getMotto(),
    });

    // 获取初始数据
    localforage.getItem('WARBLER_DATA').then((value) => {
      // 查询数据库  如果存在数据 使用库里的数据  否则使用初始默认数据
      if (value) {
        const result = JSON.parse(value as string) as LabelListProps;
        state.warblerData = result;
      } else {
        state.warblerData = initData;
      }
    });

    // 获取当前标签下的所有书签
    const markList = computed(() => state.warblerData[currentId.value]?.marks || []);

    // 当前标签
    const currentId = ref(0);

    // 切换标签
    const changeLabel = (id: number) => {
      currentId.value = id;
    };

    // 导出useLabels相关内容
    const { addLabel, deleteLabel, updateLabel, changeLabelIndex } = useLabels(state);

    // 导出useMarks相关内容
    const { addMark, deleteMark, updateMark, changeMarkIndex } = useMarks(markList);

    // 把数据存到localFroge中  监听  当数据变化的时候就调取一次存储方法
    // 立即调用一次的目的是如果localFroge里面没有值则立刻存一次
    watch(
      () => state,
      () => {
        localforage.setItem('WARBLER_DATA', JSON.stringify(state.warblerData));
      },
      { immediate: true, deep: true }
    );

    // 退出编辑模式
    const editModeFn = () => {
      state.editMode = false;
      createMessage('已退出编辑模式 !');
    };

    // 更新数据
    const updateWarblerData = (warblerData: any) => {
      state.warblerData = warblerData;
      currentId.value = 0;
    };
    // 监听事件,更新数据
    emitter.on('update-warblerData', updateWarblerData);
    // 显式卸载
    onUnmounted(() => {
      emitter.off('update-warblerData', updateWarblerData);
    });
    return {
      currentId,
      markList,
      ...toRefs(state),
      changeLabel,
      addLabel,
      addMark,
      createMessage,
      deleteLabel,
      updateLabel,
      deleteMark,
      updateMark,
      editModeFn,
      updateWarblerData,
      changeMarkIndex,
      changeLabelIndex,
    };
  },
});
</script>

<style lang='scss'>
.my-book-mark {
  position: absolute;
  left: 50%;
  top: 10vh;
  transform: translateX(-50%);
  height: calc(80vh);
  background: var(--glassmorphism-rgba);
  backdrop-filter: var(--glassmorphism-filter);
  border-radius: var(--glassmorphism-radius);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
  display: flex;

  .left-part {
    width: 200px;
    height: 100%;
    background: var(--glassmorphism-rgba);
    backdrop-filter: var(--glassmorphism-filter);
    border-radius: var(--glassmorphism-radius) 0 0 var(--glassmorphism-radius);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
    position: relative;
    .left-top-part {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        width: 120px;
      }
    }
    .left-middle-part {
      max-height: calc(100% - 190px);
      overflow: auto;
      //隐藏滚动条
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .left-bottom-part {
      width: 100%;
      height: 40px;
      position: absolute;
      bottom: 0;
    }
  }

  .right-part {
    width: 920px;
    .right-top-part {
      width: 100%;
      height: 100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.18);
      position: relative;
    }
    .right-middle-part {
      height: calc(100% - 140px);
      overflow: auto;
      padding: 23px 20px;
      //隐藏滚动条
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .right-bottom-part {
      position: relative;
      width: 100%;
      height: 40px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .quit-edit-mode {
        position: relative;
        z-index: 1;
        font-size: 14px;
        color: var(--theme-main);
        cursor: pointer;
      }
      .motto-text {
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 10px;
        color: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        text-shadow: 0 0 10px rgb(0 0 0 / 60%);
      }
    }
  }
}
</style>
