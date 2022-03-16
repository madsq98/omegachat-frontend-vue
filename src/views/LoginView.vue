<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="inputUsername" placeholder="Email" />
    <input
      type="password"
      name="password"
      v-model="inputPassword"
      placeholder="Password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "../stores/user";
import { ref } from "vue";
const userStore = UserStore();
const inputUsername = ref("");
const inputPassword = ref("");
function login(this: any) {
  userStore.logIn({username: inputUsername.value, password: inputPassword.value, id: ''})
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>