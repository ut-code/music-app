import { API_BASE_ENDPOINT } from "../utils/endpoints";
import Music from "./musicType";

export async function getAllMusic(): Promise<Music[]> {
  const response = await fetch(`${API_BASE_ENDPOINT}/api/songs`);
  return await response.json();
}
