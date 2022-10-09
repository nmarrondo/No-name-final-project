import { BASE_URL } from "./config"

export const fetcher = async (key:string) => {
  const url = BASE_URL + key
  const res = await fetch(url)
  return res.json()
}

export const local_fetcher = async (key:string) => {
  const res = await fetch(key)
  return res.json()
}