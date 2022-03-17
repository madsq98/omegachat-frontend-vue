<template>
  <h1>All Chat Rooms</h1>
  <table class="table table-responsive">
    <thead>
      <tr>
        <th scope="col" class="w-15">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Owner</th>
        <th scope="col"> </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="room in testList">
        <th scope="row" class="w-15">{{ room.id }}</th>
        <td>{{ room.title }}</td>
        <td>{{ room.owner.username }}</td>
        <td><RouterLink :to="{ name: 'JoinRoom', params: { id: room.id }}">Join</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Chatroom } from "@/core/chatroom";
import { ChatroomsService } from "@/services/chatrooms.service";
import type { Ref } from "vue";
import { ref } from "vue";

let testList: Ref<Chatroom[]> = ref([]);

const chatroomsService = new ChatroomsService();

chatroomsService.getRooms().then(obj => {
  testList.value = obj;
});

async function getList() {
  return await chatroomsService.getRooms();
}

</script>

<style scoped>
.w-15 {
  width:30%;
}
</style>