<template>
  <div>
    <van-nav-bar
      title="游戏列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-card
        v-for="item in gameList"
        :key="item.id"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
      />
    </van-list>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, Reactive, ref, Ref } from "vue";
import { List, Card, NavBar } from "vant";

type Game = {
  id: number;
  title: string;
  desc: string;
  thumb: string;
};
const list: Game[] = [
  {
    id: 1,
    title: "飞机大战",
    desc: "飞机大战",
    thumb: "1",
  },
  {
    id: 2,
    title: "飞剑传说",
    desc: "飞剑传说",
    thumb: "2",
  },
  {
    id: 3,
    title: "贪吃蛇",
    desc: "贪吃蛇",
    thumb: "3",
  },
  {
    id: 4,
    title: "俄罗斯方块",
    desc: "俄罗斯方块",
    thumb: "4",
  },
  {
    id: 5,
    title: "五子棋",
    desc: "五子棋",
    thumb: "5",
  },
  {
    id: 6,
    title: "植物塔防",
    desc: "植物塔防",
    thumb: "6",
  },
];

const loading = ref(false);
const finished = ref(true);
const gameList: Reactive<Game[]> = reactive([]);

onMounted(() => {
  onLoad();
});
function onLoad() {
  loading.value = true;
  finished.value = false;

  setTimeout(() => {
    gameList.push(...list);

    loading.value = false;
    finished.value = true;
  }, 500);
}

function onClickLeft(){
  history.back()
}
</script>
<style lang="css" scoped></style>
