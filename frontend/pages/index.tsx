import tw from "twin.macro"
import { ButtonLink } from "../components/shared/ButtonLink"
import { ReturnButton } from "../components/shared/ReturnButton"
import { RegisterProductForm } from "../components/forms/RegisterProductForm"
import { useUser } from "@auth0/nextjs-auth0"
import { NavBar } from "../components/NavBar"


export default function Home() {
  const {user} = useUser()
  return (
    <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
      {!user && (
        <div tw="h-full flex flex-col justify-center">
          <div tw="flex flex-col justify-center mx-auto mb-[30px]">
            <p>Bienvenido a The Good Shop</p>
          </div>
          <div tw="flex flex-col gap-4">
            <ButtonLink href="/register_user">Registrarme</ButtonLink>
            <ButtonLink href="/api/auth/login">Ya tengo una cuenta</ButtonLink>
            <ButtonLink href="/shop">Sólo quiero mirar</ButtonLink>
          </div>
        </div>
      )}
      {user && (
        <>
          <NavBar mode="mainNav" />
          <div tw="h-full flex gap-3 flex-col justify-center pb-32">
            <p tw="mx-auto pb-6">Hola {user.name}</p>
            <ButtonLink href="/shop">Comprar</ButtonLink>
            <ButtonLink href="/product_upload">Vender</ButtonLink>

          </div>
        </>
      )}
    </div>
  )
}
