<template>
  <div id="login" class="form-group text-center">
    <h3>Create User</h3>
    <label for="inputUsername">Username</label>
    <input class="form-control" type="text" id="inputUsername" name="username" v-model="inputUsername" placeholder="Username" />
    <label for="inputPassword">Password</label>
    <input class="form-control" type="password" id="inputPassword" name="password" v-model="inputPassword" placeholder="Password" />
    <button type="button" class="btn btn-primary w-100 mt-3" v-on:click="createUser()">Create User</button>
    <small class="form-text text-muted">Already have an account? <RouterLink to="/Login">Log in here</RouterLink></small>

    <span style="margin-top:20px;" v-if="errorObj.formError">
      <div class="alert alert-danger" role="alert">
      {{ errorObj.errorStr }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { UserStore } from "@/stores/user";
import router from "@/router";

const userStore = UserStore();
const inputUsername = ref("");
const inputPassword = ref("");

let errorObj = {
  formError: false,
  errorStr: ''
}

function createUser() {
  userStore.create(inputUsername.value, inputPassword.value).then(obj => {
    alert('User created! Please login!');
    router.push('/login');
  }, err => {
    alert('Creation failed! Username is probably taken');
  });
}
</script>

<style scoped>
#login {
  width: 500px;
  margin: auto;
  margin-top:150px;
  padding: 20px;
}
</style>
