import tw from "twin.macro"
import { ReturnButton } from "../components/shared/ReturnButton"
import { NextButton } from "../components/shared/NextButton"

import { Input } from "../components/forms/form_widgets/Input"



const Page = () => {
  return(
    <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
      <div>
        <ReturnButton></ReturnButton>
      </div>
      <div tw="flex flex-col gap-2">
        <Input type="text" placeholder="nombre"></Input>
        <Input type="text" placeholder="contraseña"></Input>
        <Input type="text" placeholder="confirmar constraseña"></Input>
      </div>
      <div tw="mb-[80px]">
        <NextButton href="">Siguiente</NextButton>
      </div>
    </div>
  )
}

export default Page;