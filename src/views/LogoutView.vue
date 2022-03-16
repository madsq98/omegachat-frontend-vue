<template>

</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user";
import router from "@/router";

const userStore = UserStore();
userStore.logOut();

router.push('/login');
</script>

<style scoped>

</style>