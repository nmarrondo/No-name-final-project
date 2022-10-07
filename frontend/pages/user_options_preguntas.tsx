import tw from "twin.macro"
import { RegisterProductForm } from "../components/forms/RegisterProductForm";
import { NavBar } from "../components/NavBar";
import { ReturnButton } from "../components/shared/ReturnButton";
import { UserOptionsButton } from "../components/shared/UserOptionsButton";

const Page = () => {

  return(
  <>
    <div tw="bg-gray-200 h-[160px]">
      <div tw="w-10/12 flex flex-col justify-between mx-auto gap-10 overflow-hidden">
        <div>
          <NavBar mode="backNav" /> 
        </div>
        <div>
          <p tw="pt-[30px]">Preguntas</p>
        </div>
      </div>
    </div>
    <div tw="h-full">
      <div tw="flex flex-col gap-4 py-[30px] w-10/12 mx-auto">
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
        <UserOptionsButton href="">Pregunta-A</UserOptionsButton>
      </div>
    </div>

  </>
  )
}

export default Page;