import tw from "twin.macro"
import { HomeButton } from "../components/shared/HomeButton"
import { ReturnButton } from "../components/shared/ReturnButton"
import { RegisterProductForm } from "../components/forms/RegisterProductForm"
import { SignUpUserForm } from "../components/forms/SingUpUserForm"

export default function Home() {
  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <ReturnButton></ReturnButton>
      </div>
      <div tw="flex flex-col gap-2">
        <SignUpUserForm />
      </div>
    </div>
  )
}