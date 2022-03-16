import type { User } from "@/models/User";

export interface Chatroom {
  id: string;
  title: string;
  owner: User;
}