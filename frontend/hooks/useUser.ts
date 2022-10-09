import React, {useContext} from "react";
import { User } from "./IUser";
import { BASE_URL } from "../lib/config"

const create_user = async (data): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  return res.json()
}

const delete_user = async (user_id:string) => {
  const res = await fetch (`${BASE_URL}/the-good-shop.users/${user_id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

export interface UserOptions {
  allowDelete?: boolean
}

export const UserContext = React.createContext<{
  user?: User
  options?: UserOptions
}>({})

export const useUser = (): {
  user?: User
  allowDelete: boolean
  delete_user: () => void
  create_user: (data: any) => Promise<User>
} => {
  const { user,options } = useContext(UserContext)
  let allowDelete = options?.allowDelete || false
  return {
    user,
    allowDelete,
    delete_user: () => delete_user(user.telephone),
    create_user,
  }
}