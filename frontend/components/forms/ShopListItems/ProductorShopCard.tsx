import tw from "twin.macro";
import { useUser } from "../../../hooks/useUser"; 
import { UserProfilePic } from "./user/UserProfileData";
import { ButtonLink } from "../../shared/ButtonLink";

export const ProductorShopCard = () => {
  const { user } = useUser()

  return(
    <div key={user._id} tw="bg-gray-200">
      <ButtonLink href={`/shop/productor/${user._id}`}>
        {user.name}
      </ButtonLink>
      <p>{user.description}</p>
    </div>
  )
}