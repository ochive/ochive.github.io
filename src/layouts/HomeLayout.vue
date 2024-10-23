<script setup lang="ts">
import {
  ElAside,
  ElButton,
  ElContainer,
  ElHeader,
  ElIcon,
  ElMain,
  ElMenu,
} from "element-plus";
import { ref } from "vue";
import { HeaderBar } from './components'

const isCollapse = ref(false);
// 默认的菜单折叠动画太卡顿.关闭掉
const isCollapseTransition = false;

function handleOpen(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}
function handleClose(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}
</script>

<!-- 布局使用上中布局, 中间左侧是菜单栏, 右侧是主工作区 -->
<template>
  <div class="layout-container">
    <ElContainer>
      <ElHeader class="layout-header">
        <HeaderBar/>
      </ElHeader>
      <ElContainer class="layout-center-area">
        <!-- 当菜单折叠后, 需要改变侧边栏宽度 -->
        <ElAside
          class="layout-aside"
          :width="isCollapse ? '64px' : 'calc(20rem + 8px)'"
        >
          <ElMenu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :collapse-transition="isCollapseTransition"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Location /></el-icon>
                <span>一级菜单</span>
              </template>
              <el-menu-item index="1-1">二级菜单1</el-menu-item>
              <el-menu-item index="1-2">二级菜单2</el-menu-item>
              <el-menu-item-group title="菜单组">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><Menu /></el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </ElMenu>
          <ElButton
            class="hamburger-container"
            @click="() => (isCollapse = !isCollapse)"
          >
            <el-icon :size="20">
              <Expand v-if="isCollapse" />
              <Fold v-else />
            </el-icon>
          </ElButton>
        </ElAside>
        <ElMain class="layout-main">main</ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style scoped>
/* 统一的画板寸为1440 */
/* 整体采用左右布局, 将左边的导航栏固定, 对右边的工作区域进行动态缩放, 以适配1920, 1440, 1366等主流分辨率 */
.layout-container {
  min-height: 100vh;
  /* min-width: 100vh;
   */
  /* 满幅背景定宽内容 */
  /* padding: 0 calc(50% - (1280px / 2)); */
  background-color: #f0f2f5;
  /* rgb(244, 246, 250) */

  /* 排版header和layout-center-area */
  display: flex;
  flex-flow: column wrap;
}

.layout-header {
  min-width: 100%;
  background-color: rgb(48, 65, 86);
  /* 48+8n */
  height: 64px;
}

/* 排版侧边栏和主工作区.由于el-container默认flex布局, 且默认水平左右排列,因此无需处理 */
/* el-container默认配置了flex: 1, 让下方的工作区总是占用剩下的页面高度(排除header) */
.layout-center-area {
  /* 为中间部分添加一些间隔, 增加美观度 */
  padding:8px;
}
.layout-aside {
  /* background-color: #e6f4ff; */
  /* 200+8n */
  /* width: calc(20rem + 8px); */

  border-radius: 16px;

  /* 与主工作区保持距离 */
  margin-right: 32px;

  /* 侧边栏中元素排版 */
  display: flex;
  flex-flow: column wrap;
}

.el-menu-vertical-demo {
  /* 让菜单占据侧边栏中除了collapse按钮以外的空间 */
  flex: 1;
  /* 设置导航字号 */
  font-size: 14px;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  flex: 1;
} */
/* 给一个最小高度, 让折叠按钮始终在最下面, 让菜单栏占据垂直方向的剩余高度 */
.hamburger-container {
  min-height: 4.6rem;
  /* background-color: beige; */

  /* cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent; */
}
/* .hamburger-container:hover {
  background-color: rgba(0, 0, 0, 0.025);
} */
/* .el-icon--collapse{
  width:64px;
  height:64px;
} */
/* 在与侧边栏的关系中, el-main会默认设置flex:1, 占据减掉侧边栏后剩余的宽度. 且设置了默认的padding:var(--el-main-padding) */
.layout-main {
  /* display: flex;
  flex-wrap: wrap; */
  background-color: aquamarine;

  border-radius: 16px;
  /* align-items:start; */
}
</style>
