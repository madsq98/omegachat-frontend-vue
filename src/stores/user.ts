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
    passWord: (state) => {
      return state.loggedInUser.password;
    },
    loggedIn: (state) => {
      return state.isLoggedIn;
    }
  },
  actions: {
    create(username: string, password: string): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        let res = userService.createUser(username, password);

        res.then(obj => {
          resolve(true);
        }, err => {
          reject(false);
        });
      });
    },
    logIn(user: User): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        let res = userService.checkLogin(user.username, user.password);

        res.then(obj => {
          if(obj.id != 'null') {
            this.loggedInUser = obj;
            this.isLoggedIn = true;
            resolve(true);
          } else {
            resolve(false);
          }
        }, err => {
          reject(false);
        })
      });
    },
    logOut() {
      this.loggedInUser = {} as User;
      this.isLoggedIn = false;
    },
  },
});
