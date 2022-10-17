import useSWR from "swr"
import { local_fetcher } from "../../../../lib/fetcher"

interface Auth0User {
  picture: string
  email: string
  name: string
}

export const UserProfilePic:React.FC<{user_id:string}> = ({user_id}) => {
  const { data } = useSWR<Auth0User>(
    `/api/userinfo?user_id=${user_id}`, 
    local_fetcher
  )
  // console.log(data)
  if (!data) return <></>
  return (<div>{data.name}</div>)
}