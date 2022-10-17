import { BASE_URL } from "./config"
import axios from "axios"

export const fetcher = async (key: string) => {
  const res = await axios.get(BASE_URL + key)
  return res.data
}

export const local_fetcher = async (key: string) => {
  const res = await axios.get(key)
  return res.data
}