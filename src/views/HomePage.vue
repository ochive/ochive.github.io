<template>
  <div v-if="service.isLoggedIn()">
    <div>
      <img
        width="{100}"
        height="{100}"
        src="{this.state.account.avatar}"
        alt="{this.state.account.username}"
      />
      <br />
      <p>{this.state.account.username}</p>
      <br />
      <button @click="service.logout()">Logout</button>
    </div>
  </div>
  <div v-else>
    <LoginPage />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import * as service from "@/backend/service";

onMounted(() => {
    console.log('hello')
});
</script>
