<template>
<h2>{{ this.$route.params.id }}</h2>
</template>

<script setup lang="ts">
export default {
  console.log(this.$route);
}
</script>

<style scoped>
</style>