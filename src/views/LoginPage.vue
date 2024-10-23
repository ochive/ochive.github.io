<template>
  <div class="box">
    <button @click="casdoorLogin">点我登录啊!</button>
  </div>
</template>
<script setup lang="ts">
import { goToLink } from "@/backend/service";

function casdoorLogin() {
}
</script>
<style scoped>
.box {
  text-align: center;
  align-items: center;
}
</style>
