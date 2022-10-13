import tw from "twin.macro"
import { UserSectionButton } from "../../components/user-section/UserSectionButton";
import { useUser } from "@auth0/nextjs-auth0"
import { NavBar } from "../../components/NavBar";
import { UserSectionTitle } from "../../components/shared/text";
import { UserSectionBody } from "../../components/user-section/UserSectionBody";
import { UserSectionLine } from "../../components/user-section/UserSectionLine";
import { UserSectionInput } from "../../components/user-section/UserSectionInput";

const Page = () => {
  const {user} = useUser()

  return(
  <>
    <UserSectionBody>
      <NavBar mode="backNav" /> 
      <UserSectionTitle>Información de usuario</UserSectionTitle>
    </UserSectionBody>
    <div tw="h-full">
        <div tw="flex flex-col gap-2 py-[30px] w-10/12 mx-auto">
          <UserSectionInput placeholder={user.name} />
          <UserSectionInput placeholder={user.email} />
        </div>
        <UserSectionLine />
        <div tw="flex flex-col gap-2 py-[30px] w-10/12 mx-auto">
          <UserSectionButton href="">Cambiar contraseña</UserSectionButton>
          <UserSectionButton href="">Cambiar número de teléfono</UserSectionButton>
          <UserSectionButton href="">Facturación</UserSectionButton>
        </div>
      </div>
  </>
  )
}

export default Page;