import type { Chatroom } from "@/core/chatroom";
import type { User } from "@/core/user";

export interface Chat {
  id: string;
  message: string;
  chatroom: Chatroom;
  sender: User;
}