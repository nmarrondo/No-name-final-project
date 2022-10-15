import tw from "twin.macro"
import { Input } from "./forms/form_widgets/Input"
import { ProfileButton } from "./shared/ProfileButton"
import { ReturnButton } from "./shared/ReturnButton"
import { useUser } from "@auth0/nextjs-auth0"
import { Localization } from "./shared/Localization"
import { Searcher } from "./shared/Searcher"
import Link from "next/link"

export const NavBar: React.FC<{
  mode: "mainNav" | "shopNav" | "productNav" | "backNav"
  href?: string
}> = ({ mode, href }) => {

  const { user } = useUser()

  let mainNav = false
  let shopNav = false
  let productNav = false
  let backNav = false

  switch (mode) {
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

  return (
    <nav>

      {mainNav && (
        <>
          <div tw="absolute flex justify-between mt-8 w-10/12">
            <ProfileButton />
            <Localization />
          </div>
        </>
      )}

      {shopNav && !user && (
        <>
          <div tw="absolute flex justify-between items-center mt-8 w-10/12">
            <ReturnButton href={href} />
            <Searcher />
          </div>

        </>
      )}

      {shopNav && user && (
        <>
          <div tw="absolute flex justify-between items-center  mt-8 w-10/12">
            <ReturnButton href={href} />
            <Searcher />
            {/* <CartButton /> */}
          </div>

        </>
      )}

      {productNav && !user && (
        <>
          <div tw="absolute flex mt-8 w-10/12">
            <ReturnButton href={href} />
          </div>
        </>
      )}

      {productNav && user && (
        <>
          <div tw="absolute flex mt-8 w-10/12">
            <ReturnButton href={href} />
            {/* <CartButton /> */}
          </div>
        </>
      )}

      {backNav && (
        <div tw="absolute mt-8">
          <ReturnButton href={href} />
        </div>
      )}

    </nav>
  )
}

