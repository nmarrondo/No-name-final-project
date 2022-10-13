import tw from "twin.macro"
import { AppControlItem } from "./AppControlItem"
import { useUser } from "@auth0/nextjs-auth0"


export const AppControl = () => {
  const { user } = useUser()
  return (
    <div>
      {/* <nav tw="flex w-[560px] h-[40px] mb-[20px] bg-white divide-x rounded-full overflow-hidden">
        <AppControlItem href="/">Button1</AppControlItem>
        <AppControlItem href="/shop">Button2</AppControlItem>
        <AppControlItem href="/product_upload">Button3</AppControlItem>
      </nav> */}
      {user && (
        <div><p>User logged: {user.name}</p></div>
      )}  
      {!user && (
        <div><p>No user logged</p></div>
      )}  
    </div>

  )
}