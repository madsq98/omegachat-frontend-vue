<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import router from "@/router";

const userStore = UserStore();
if(userStore.userName == undefined || userStore.userName.length == 0) {
  router.push('/login');
}
</script>

<template>
<h1>Hello your home</h1>
</template>
