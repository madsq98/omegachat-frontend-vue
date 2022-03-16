import http from "./http.client";
import type { User } from "@/models/User";

export class UserService {
  async createUser(
    username: string,
    password: string
  ): Promise<User> {
    const res = await http.post<User>("/users", {
      username: username,
      password: password
    });
    return res.data;
  }
}
