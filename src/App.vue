<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

// const router = useRouter();
// onMounted(() => {
//   let url = window.location.pathname;
//   if (url === "/") {
//     // TODO::这里应使用vue router 配合白名单进行判断.如果不在白名单内, 且没有token, 则跳转登录
//     if (isLoggedIn()) {
//       router.push('/home')
//     } else {
//       router.push('/login')
//     }
//   }
// });
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
