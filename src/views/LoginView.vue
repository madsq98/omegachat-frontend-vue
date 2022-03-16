<template>
  <div id="login" class="form-group text-center">
    <h3>Login</h3>
    <label for="inputUsername">Username</label>
    <input class="form-control" type="text" id="inputUsername" name="username" v-model="inputUsername" placeholder="Username" />
    <label for="inputPassword">Password</label>
    <input class="form-control" type="password" id="inputPassword" name="password" v-model="inputPassword" placeholder="Password" />
    <button type="button" class="btn btn-primary w-100 mt-3" v-on:click="login()">Login</button>
    <small class="form-text text-muted">Don't have an account yet? <RouterLink to="/CreateUser">Create one here</RouterLink></small>

    <span style="margin-top:20px;" v-if="errorObj.formError">
      <div class="alert alert-danger" role="alert">
      {{ errorObj.errorStr }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "../stores/user";
import { ref } from "vue";
import router from "@/router";
const userStore = UserStore();
const inputUsername = ref("");
const inputPassword = ref("");

let errorObj = {
  formError: false,
  errorStr: ''
}

function login(this: any) {
  userStore.logIn({username: inputUsername.value, password: inputPassword.value, id: ''}).then((res) => {
    if(res) {
      router.push('/chatrooms');
    }
    else {
      errorObj.formError = true;
      errorObj.errorStr = "Incorrect username and/or password!";
      this.$forceUpdate();

      inputUsername.value = '';
      inputPassword.value = '';
    }
  }, err => {
    errorObj.formError = true;
    errorObj.errorStr = "Server error!";
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