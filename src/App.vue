<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { provide } from "vue";
import { UserService } from "@/services/user.service";
import { UserStore } from "@/stores/user";

const userStore = UserStore();

provide("UserService", new UserService());
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand">Omega Chat</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="!userStore.loggedIn">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/CreateUser" class="nav-link">Create User</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Login" class="nav-link">Log In</RouterLink>
            </li>
          </ul>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="userStore.loggedIn">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/chatrooms" class="nav-link">Chat Rooms</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/Logout" class="nav-link">Log Out</RouterLink>
            </li>
          </ul>

          <span class="navbar-text" v-if="userStore.loggedIn">
            Logged in as: {{ userStore.userName }}
          </span>
        </div>
      </div>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<!--
<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
-->
