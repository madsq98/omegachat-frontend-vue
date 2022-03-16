import http from "./http.client";
import type { Chatroom } from "@/models/Chatroom";

export class ChatroomService {
  async getAllChatrooms(): Promise<Chatroom[]> {
    const res = await http.get<Chatroom[]>("/chatrooms");
    return res.data;
  }
}