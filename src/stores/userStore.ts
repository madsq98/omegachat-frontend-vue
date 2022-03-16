import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";
import { ChatroomService } from "@/services/chatroom.service";

const userService: UserService = new UserService();
const chatroomService: ChatroomService = new ChatroomService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { username: "", password: "" } as User,
  }),
  getters: {
    userName: (state) => {
      if (state.loggedInUser.username != undefined) return state.loggedInUser.username;
      else return "";
    },
    passWord: (state) => {
      if(state.loggedInUser.password != undefined) return state.loggedInUser.password;
      else return "";
    }
  },
  actions: {
    createUser(username: string, password: string) {
      userService
        .createUser(username, password)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
    checkLogin(username: string, password: string): boolean {
      chatroomService
        .getAllChatrooms()
        .then((obj) => {
          this.loggedInUser.username = username;
          this.loggedInUser.password = password;
          return true;
        })
        .catch((err) => {
          console.log(err);
          return false;
        });
      return false;
    }
  },
});
