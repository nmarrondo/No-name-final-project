import tw from "twin.macro"
import { Input } from "./forms/form_widgets/Input"
import { ProfileButton } from "./shared/ProfileButton"
import { ReturnButton } from "./shared/ReturnButton"
import { CartButton } from "./shared/CartButton"
import { useUser } from "@auth0/nextjs-auth0"
import { Localization } from "./shared/Localization"
import Link from "next/link"

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
          <div tw="absolute flex justify-between mt-8 w-10/12">
            <ProfileButton />
            <Localization/>
          </div>
        </>
      )}

      {shopNav && !user && (
        <>
          <div tw="absolute flex justify-between mt-8 w-10/12">
            <ReturnButton />
            <input tw="h-[36px] w-[190px] bg-gray-200" placeholder="Buscador"/>
          </div>
  
        </>
      )}

      {shopNav && user && (
        <>
          <div tw="absolute flex justify-between mt-8 w-10/12">
            <ReturnButton />
            <input tw="h-[36px] w-[190px] bg-gray-200" placeholder="Buscador"/>
            {/* <CartButton /> */}
          </div>
  
        </>
      )}  

      {productNav && !user && (
        <>
          <div tw="absolute flex mt-8 w-10/12">
            <ReturnButton />
          </div>
        </>
      )}

      {productNav && user && (
        <>
          <div tw="absolute flex mt-8 w-10/12">
            <ReturnButton />
            {/* <CartButton /> */}
          </div>
        </>
      )}

      {backNav && (
        <div tw="absolute mt-8">
          <ReturnButton />
        </div>
      )}

    </nav>
  )
}

