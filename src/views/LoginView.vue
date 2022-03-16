<template>
<h2>Please login</h2>
  <input v-model="inputUsername" placeholder="Enter username" /><br />
  <input v-model="inputPassword" placeholder="Enter password" /><br />
  <button @click="handleLogin">Create</button>
</template>

<script setup lang="ts">
import { UserStore } from "../stores/userStore";
import { ref } from "vue";
import router from "@/router";

const userStore = UserStore();

const inputUsername = ref("");
const inputPassword = ref("");

if(userStore.userName != undefined && userStore.userName.length > 0) {
  router.push('/');
}

function handleLogin() {
  userStore.checkLogin(inputUsername.value, inputPassword.value);
}
</script>

<style scoped>

</style>