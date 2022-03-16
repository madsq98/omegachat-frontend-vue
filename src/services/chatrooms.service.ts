import http from "./http.client";
import type { User } from "@/core/user";
import type { Chatroom } from "@/core/chatroom";
import { UserStore } from "@/stores/user";

export class ChatroomsService {
  private readonly userStore = UserStore();
  async getRooms(): Promise<Chatroom[]> {
    if(this.userStore.isLoggedIn) {
      let authStr = btoa(this.userStore.userName + ':' + this.userStore.passWord);
      const res = await http.get<Chatroom[]>("/chatrooms", {
        headers: {
          'Authorization': 'Basic ' + authStr
        }
      });

      return res.data;
    } else {
      return Promise.resolve([{id: '', title: '', owner: { id: '', username: '', password: ''}} as Chatroom]);
    }
  }
}
