<template>
  <h2>Let's create a user:</h2>
  <input v-model="inputUsername" placeholder="Enter username" /><br />
  <input v-model="inputPassword" placeholder="Enter password" /><br />
  <button @click="handleCreateUser">Create</button>
  <br /><br />
</template>

<script setup lang="ts">
import { UserStore } from "../stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputUsername = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.createUser(inputUsername.value, inputPassword.value);
}
</script>

<style scoped></style>
