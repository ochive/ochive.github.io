<template>
  <div class="bar-container">
    <div class="logo-container">
      <img src="@/assets/element-plus-logo.svg" alt="logo" />
      <span>Web后台管理系统</span>
    </div>
    <div class="header-right">
      <ElDropdown class="right-menu-item hover-effect">
        <div class="avatar-wrapper">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt="user-avatar"
            class="user-avatar"
          />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <ElDropdownMenu slot="dropdown">
            <router-link to="/profile/index">
              <ElDropdownItem>Profile</ElDropdownItem>
            </router-link>
            <router-link to="/">
              <ElDropdownItem>Dashboard</ElDropdownItem>
            </router-link>
            <ElDropdownItem divided @click.native="logout()">
              <span style="display: block">Log Out</span>
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElDropdown, ElDropdownMenu } from "element-plus";
import { logout } from "@/backend/service";
import { onMounted } from "vue";
import { LocalStore } from "@/utils/store";

// getMyProfileUrl()
onMounted(() => {
  // TODO::key抽取为常量.
  const userinfo = LocalStore.get("userinfo");
  if (userinfo != null) {
    alert(userinfo.name);
  }
});
</script>

<style scoped lang="less">
.bar-container {
  height: 100%;
  /* 控制header内容的布局 */
  display: flex;
  /* 水平两端对齐 */
  justify-content: space-between;
  /* 内容垂直居中 */
  align-items: center;
}
/* header中嵌套的左侧logo div设置样式 */
.logo-container {
  height: 100%;
  display: flex;
  /* 子项垂直居中 */
  align-items: center;
}

/* logo区域的文字排版 */
.logo-container > span {
  font-size: 20px;
  color: #f0f2f5;
  white-space: nowrap;
  margin-left: 8px;
}

.header-right {
  /* 获得焦点时, 不显示轮廓 */
  &:focus {
    outline: none;
  }

  .right-menu-item {
    // display: inline-block;
    // padding: 0 8px;
    // height: 100%;
    // font-size: 18px;
    // color: #5a5e66;
    // vertical-align: text-bottom;

    /* 为菜单项添加鼠标特效 */
    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }

  .avatar-wrapper {
    // margin-top: 5px;
    // position: relative;

    .user-avatar {
      // cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    /* 调整下拉箭头的颜色和大小 */
    .el-icon--right {
      color: #409efc;
      font-size: 12px;
    }
  }
}

/* 去除a标签的下划线 */
a {
  text-decoration: none;
}
</style>
