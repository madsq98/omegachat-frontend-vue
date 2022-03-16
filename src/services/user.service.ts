import http from "./http.client";
import type { User } from "@/core/user";

export class UserService {
  async createUser(username: string, password: string): Promise<User> {
    const res = await http.post<User>("/users", {
      username: username,
      password: password
    });
    return res.data;
  }
  async checkLogin(username: string, password: string): Promise<User> {
    const res = await http.post<User>("/users/login", {
      username: username,
      password: password
    });
    return res.data;
  }
}
