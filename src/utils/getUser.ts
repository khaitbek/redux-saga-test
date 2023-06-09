import axios from "axios";
import { User } from "../types";

export async function getUser(id: number): Promise<User> {
  const user = (await axios.get(import.meta.env.VITE_BASE_URL + "/users?id=" + String(id))).data[0];
  console.log(user);
  return user;
}