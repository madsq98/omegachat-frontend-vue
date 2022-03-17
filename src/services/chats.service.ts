import { UserStore } from "@/stores/user";
import type { Chat } from "@/core/chat";
import http from "@/services/http.client";

export class ChatsService {
  private readonly userStore = UserStore();
  async getChats(roomId: string): Promise<Chat[]> {
    if(this.userStore.isLoggedIn) {
      let authStr = btoa(this.userStore.userName + ':' + this.userStore.passWord);
      const res = await http.get<Chat[]>("/chats", {
        headers: {
          'Authorization': 'Basic ' + authStr
        }
      });

      return res.data;
    } else {
      return Promise.resolve([]);
    }
  }
}