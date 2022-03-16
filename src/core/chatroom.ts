import type { User } from "@/core/user";

export interface Chatroom {
  id: string;
  title: string;
  owner: User;
}