import axios from "axios";
import { Post } from "../types";
import { BASE_URL } from ".";

export async function getPosts(): Promise<Post[]> {
  return (await axios.get(BASE_URL + "/posts")).data;
}