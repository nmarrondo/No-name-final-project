import tw from "twin.macro"
import { RegisterProductForm } from "../components/forms/RegisterProductForm";
import { ReturnButton } from "../components/shared/ReturnButton";
import { UserOptionsButton } from "../components/shared/UserOptionsButton";
import { useUser } from "@auth0/nextjs-auth0"
import { NavBar } from "../components/NavBar";

const Page = () => {
  const {user} = useUser()

  return(
  <>
    <div tw="bg-gray-200 h-[160px]">
      <div tw="w-10/12 flex flex-col justify-between mx-auto gap-10 overflow-hidden">
        <div>
          <NavBar mode="backNav" /> 
        </div>
        <div>
          <p tw="pt-[30px]">Información de usuario</p>
        </div>
      </div>
    </div>
    <div tw="h-full">

        <div tw="flex flex-col gap-4 py-[30px] w-10/12 mx-auto">
          <input tw="h-[36px] w-full bg-gray-200 placeholder:text-black placeholder:text-center" placeholder={user.name} />
          <input tw="h-[36px] w-full bg-gray-200 placeholder:text-black placeholder:text-center" placeholder={user.email} />
        </div>
        <div tw="h-[4px] w-[400px] bg-gray-200"></div>
        <div tw="flex flex-col gap-4 py-[30px] w-10/12 mx-auto">
          <UserOptionsButton href="">Cambiar contraseña</UserOptionsButton>
          <UserOptionsButton href="">Cambiar número de teléfono</UserOptionsButton>
          <UserOptionsButton href="">Facturación</UserOptionsButton>
        </div>
      </div>

  </>
  )
}

export default Page;