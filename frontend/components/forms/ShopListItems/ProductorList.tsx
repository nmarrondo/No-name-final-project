import tw from "twin.macro";
import useSWR from "swr"
import { ProductorShopCard } from "./ProductorShopCard";
import { UserContext } from "../../../hooks/useUser"; 
import { User } from "../../../hooks/IUser";
import qs from "querystring"

export const ProductorList = () => {
  const filter = {
    'role': 'producer'
  };
  const {data: users} = useSWR<User[]>(`/users?${qs.stringify(filter)}`,{refreshInterval: 5000})
  
  return(
    <>
    {users && users.map((user) => (
      <UserContext.Provider
        key={user._id}
        value={{user}}
      >
        <ProductorShopCard></ProductorShopCard>
      </UserContext.Provider>
    ))}
    {!users && <p>Cargando...</p>}
    </>
  )
}


