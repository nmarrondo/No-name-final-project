import tw from "twin.macro"
import { RegisterProductForm } from "../../components/forms/RegisterProductForm";
import { NavBar } from "../../components/NavBar";
import { ReturnButton } from "../../components/shared/ReturnButton";
import { UserSectionButton } from "../../components/user-section/UserSectionButton";
import { UserSectionBody } from "../../components/user-section/UserSectionBody";
import { UserSectionTitle } from "../../components/shared/text";

const Page = () => {

  return(
  <>
    <UserSectionBody>
      <NavBar mode="backNav" /> 
      <UserSectionTitle tw="pt-[30px]">Preguntas</UserSectionTitle>
    </UserSectionBody>
    <div tw="h-full">
      <div tw="flex flex-col gap-2 py-[30px] w-10/12 mx-auto">
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
        <UserSectionButton href="">Pregunta-A</UserSectionButton>
      </div>
    </div>

  </>
  )
}

export default Page;