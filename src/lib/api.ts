import axios from "axios";
import { Post } from "../types";

export async function getPosts(): Promise<Post[]> {
  return (await axios.get(import.meta.env.VITE_BASE_URL + "/posts")).data;
}