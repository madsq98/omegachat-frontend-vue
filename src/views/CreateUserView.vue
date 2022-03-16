<template>
  <h2>Create new user</h2>
  <br />
  <input v-model="username" placeholder="Enter username" />
  <br />
  <input v-model="password" placeholder="Enter password" />
  <br />
  <button @click="createUser">Create</button>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { UserStore } from "@/stores/user";

const userStore = UserStore();
const username = ref("");
const password = ref("");

function createUser() {
  userStore.create(username.value, password.value);
}
</script>

<style scoped></style>
