import { defineStore } from "pinia";
import type { User } from "@/core/user";
import { UserService } from "@/services/user.service";

const userService = new UserService();

export const UserStore = defineStore({
  id: "UserStore",
  state: () => {
    return {
      loggedInUser: {
        username: "",
        password: "",
        id: "",
      } as User,
      isLoggedIn: false,
    };
  },
  getters: {
    userName: (state) => {
      return state.loggedInUser.username;
    },
  },
  actions: {
    create(username: string, password: string) {
      userService.createUser(username, password).then((user) => {
        this.loggedInUser = user;
        this.isLoggedIn = true;
      });
    },
    logIn(user: User) {
      this.loggedInUser = user;
      this.isLoggedIn = true;
    },
    logOut() {
      this.loggedInUser = {} as User;
      this.isLoggedIn = false;
    },
  },
});
