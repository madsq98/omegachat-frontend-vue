<template>
  <h2>Room: {{ roomObj.title }}</h2>
  <ul>
    <li style="height:45px;" v-for="chat in testChats.slice(-10)">
      <strong>{{ chat.sender.username }}:</strong> {{ chat.message }}
    </li>
  </ul>

  <div class="sticky-bottom">
    <div class="row">
      <div class="col-10">
        <input type="text" class="form-control" style="height:100%;width:100%;" placeholder="Type message here...">
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-primary" style="height:100%;width:100%;">Send</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

import { useRoute } from "vue-router";
import { ChatroomsService } from "@/services/chatrooms.service";
import type { Chatroom } from "@/core/chatroom";
import type { Chat } from "@/core/chat";

const route = useRoute()
const chatroomsService = new ChatroomsService();

let testChats: Chat[] = [
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
  {
    id: '1',
    message: 'test besked',
    chatroom: {
      id: '1',
      title: 'test',
      owner: {
        id: '1',
        username: 'test',
        password: 'test'
      }
    },
    sender: {
      id: '1',
      username: 'test',
      password: 'test'
    }
  },
]

let roomId: string = route.params.id.toString();

let roomObj: Ref<Chatroom> = ref({id:'', title: '', owner: { id:'', username:'', password:''}});

chatroomsService.getOneRoom(roomId).then(obj => {
  roomObj.value = obj;
})
</script>

<style scoped>
.sticky-bottom {
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  height:100px;
  line-height:100px;
  width:850px;
  background-color:#f5f5f5;
}
</style>