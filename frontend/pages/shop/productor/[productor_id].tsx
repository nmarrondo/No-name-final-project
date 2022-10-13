import tw from "twin.macro";
import { useRouter } from "next/router";
import { User } from "../../../hooks/IUser";
import useSWR from "swr";
import { UserContext, useUser } from "../../../hooks/useUser";
import { NavBar } from "../../../components/NavBar";

const ProductorDetail = () => {
  const { user } = useUser();

  return (
    <>
      <p>{user.name}</p>
      <p>{user.description}</p>
    </>
  );
};

const Page = () => {
  const router = useRouter();
  const {
    query: { productor_id },
  } = router;

  const { data: user } = useSWR<User>(
    productor_id ? `/users/${productor_id}` : null
  );

  return (
  
      <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
        <NavBar mode="backNav" />
        {user && (
          <UserContext.Provider value={{ user }}>
            <ProductorDetail />
          </UserContext.Provider>)}{!user && <div>no user</div>}
      </div>
    

     
  );
};

export default Page;