import tw from "twin.macro"
import { HomeButton } from "../components/shared/HomeButton"
import { ReturnButton } from "../components/shared/ReturnButton"
import { RegisterProductForm } from "../components/forms/RegisterProductForm"

export default function Home() {
  return (
    <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
    <div>
      <ReturnButton></ReturnButton>
    </div>
    <div>
      <RegisterProductForm />
    </div>
  </div>
    // <div tw="h-full flex flex-col justify-center mx-auto gap-10 w-10/12 overflow-hidden">
    //   <div tw="flex flex-col justify-center mx-auto">
    //     <p>Bienvenido a The Good Shop</p>
    //   </div>
    //   <div tw="flex flex-col gap-4">
    //     <HomeButton href="/register_user">Quiero comprar</HomeButton>
    //     <HomeButton href="/register">Quiero vender</HomeButton>
    //     <HomeButton href="/shop">Sólo quiero mirar</HomeButton>
    //   </div>
    // </div>
  )
}
