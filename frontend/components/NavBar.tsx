import tw from "twin.macro"
import { Input } from "./forms/form_widgets/Input"
import { ProfileButton } from "./shared/ProfileButton"
import { ReturnButton } from "./shared/ReturnButton"
import { CartButton } from "./shared/CartButton"
import { useUser } from "@auth0/nextjs-auth0"
import Link from "next/link"


export const OldNavBar = () => {
  return(
    <nav tw="flex flex-col gap-3">
      <div tw="flex">
        <ProfileButton />
        <input tw="h-[36px] bg-gray-200" placeholder="Buscador"/>
        <ProfileButton />
        
      </div>
      <div>
        <input tw="h-[36px] w-full bg-gray-200" placeholder="Localización"/>
      </div>
    </nav>
  )
}

export const NavBar:React.FC<{
    mode: "mainNav" | "shopNav" | "productNav" | "backNav"
  }> = ({mode}) => {

  const {user} = useUser()

  let mainNav = false
  let shopNav = false
  let productNav = false
  let backNav = false
  
  switch (mode){
    case "mainNav":
      mainNav = true
      break
    case "shopNav":
      shopNav = true
      break
    case "productNav":
      productNav = true
      break
    case "backNav":
      backNav = true
      break
  }

  return(
    <nav>

      {mainNav && (
        <>
          <div tw="flex">
            <ProfileButton />
            <input tw="h-[36px] w-full bg-gray-200" placeholder="Localización"/>
          </div>
        </>
      )}

      {shopNav && !user && (
        <>
          <div tw="flex">
            <ReturnButton />
            <input tw="h-[36px] bg-gray-200" placeholder="Buscador"/>
          </div>
  
        </>
      )}

      {shopNav && user && (
        <>
          <div tw="flex">
            <ReturnButton />
            <input tw="h-[36px] bg-gray-200" placeholder="Buscador"/>
            <CartButton />
          </div>
  
        </>
      )}  

      {productNav && !user && (
        <>
          <div tw="flex justify-between">
            <ReturnButton />
          </div>
        </>
      )}

      {productNav && user && (
        <>
          <div tw="flex justify-between">
            <ReturnButton />
            <CartButton />
          </div>
        </>
      )}

      {backNav && (
        <div tw="flex">
          <ReturnButton />
        </div>
      )}

    </nav>
  )
}

