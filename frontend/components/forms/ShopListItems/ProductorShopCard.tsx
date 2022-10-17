import tw from "twin.macro";
import { useUserHook } from "../../../hooks/useUser";
import { useProduct } from "../../../hooks/useProduct"
import { UserProfilePic } from "./user/UserProfileData";
import { Button } from "../../shared/Button";
import Link from "next/link";



const Card: React.FC<{ children: any; href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <button
        tw="bg-white h-[96px] my-2 flex flex-row items-center justify-between overflow-hidden rounded-lg"
      >
        {children}
      </button>
    </Link>

  )
}

export const ProductorShopCard = () => {

  const { user } = useUserHook()

  let description = ""

  if (user.description.length > 80) {
    description = `${user.description.slice(0, 80)}...`
  } else description = user.description

  return (
    <Card href={`/shop/productor/${user._id}`} key={user._id}>
      <>
        <div tw="w-[238px] px-4 text-left">
          <h1 tw="font-semibold text-dark-800">{user.name}</h1>
          <p tw="text-[14px] text-dark-400">{description}</p>
        </div>
      </>
    </Card>
  )
}