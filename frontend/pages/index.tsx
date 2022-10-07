import tw from "twin.macro"
import { HomeButton } from "../components/shared/HomeButton"
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
          <div tw="flex flex-col justify-center mx-auto">
            <p>Bienvenido a The Good Shop</p>
          </div>
          <div tw="flex flex-col gap-4">
            <HomeButton href="/register_user">Registrarme</HomeButton>
            <HomeButton href="/api/auth/login">Ya tengo una cuenta</HomeButton>
            <HomeButton href="/shop">Sólo quiero mirar</HomeButton>
          </div>
        </div>
      )}
      {user && (
        <>
          <NavBar mode="mainNav" />
          <div tw="h-full flex gap-3 flex-col justify-center pb-32">
            <p tw="mx-auto pb-6">Hola {user.name}</p>
            <HomeButton href="/shop">Comprar</HomeButton>
            <HomeButton href="/product_upload">Vender</HomeButton>

          </div>
        </>
      )}
    </div>
  )
}
