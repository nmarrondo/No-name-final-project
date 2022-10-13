import tw from "twin.macro"
import { UserSectionButton } from "../components/user-section/UserSectionButton";
import { useUser } from "@auth0/nextjs-auth0"
import { NavBar } from "../components/NavBar";
import { UserSectionTitle } from "../components/shared/text";
import { UserSectionBody } from "../components/user-section/UserSectionBody";
import { UserSectionLine } from "../components/user-section/UserSectionLine";

const Page = () => {

  const {user} = useUser()

  return(
  <>
    <UserSectionBody>
        <NavBar mode="backNav" /> 
        <UserSectionTitle>¡Hola, {user.name}!</UserSectionTitle>
    </UserSectionBody>

    <div tw="h-full">
        <div tw="flex flex-col gap-2 py-[30px] w-10/12 mx-auto">
          <UserSectionButton href="/user_options/user">Información de usuario</UserSectionButton>
          <UserSectionButton href="">Información de pedidos</UserSectionButton>
        </div>
        <UserSectionLine />
        <div tw="flex flex-col gap-2 py-[30px] w-10/12 mx-auto">
          <UserSectionButton href="/user_options/preguntas">Preguntas</UserSectionButton>
          <UserSectionButton href="">Notificaciones</UserSectionButton>
          <UserSectionButton href="/api/auth/logout">Cerrar sesión</UserSectionButton>
        </div>
        <div tw="w-10/12 mt-[30px] flex justify-end mx-auto">
          <p tw="text-sm text-dark-400">v.prealpha</p>
        </div>
    </div>

  </>
  )
}

export default Page;