import axios from "axios";
import { UserStore } from "@/stores/userStore";

export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});
