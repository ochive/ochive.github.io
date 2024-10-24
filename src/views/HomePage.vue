<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item icon="home-o" text="首页" />
      <van-grid-item icon="home-o" text="前端网址大全" />
      <van-grid-item icon="home-o" text="后端网址大全" />
      <van-grid-item icon="home-o" text="软件推荐" />
      <van-grid-item
        icon="point-gift-o"
        text="Game"
        @click="navigateTo('/game/list')"
      />
    </van-grid>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Grid, GridItem } from "vant";
import LoginPage from "@/views/LoginPage.vue";
import * as service from "@/backend/service";
import { useRoute } from "vue-router";

const router = useRouter();
onMounted(() => {
  console.log("hello");
});

function navigateTo(path: string) {
  router.push(path)
}
</script>
