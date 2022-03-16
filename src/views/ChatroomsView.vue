<template>
  <h1>All Chat Rooms</h1>
  <table class="table table-responsive">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="room in testList">
        <th scope="row">{{ room.id }}</th>
        <td>{{ room.title }}</td>
        <td>{{ room.owner.username }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Chatroom } from "@/core/chatroom";
import { ChatroomsService } from "@/services/chatrooms.service";

let testList: Chatroom[] = [];

const chatroomsService = new ChatroomsService();

chatroomsService.getRooms().then(obj => {
  testList = obj;
});

</script>

<style scoped>

</style>