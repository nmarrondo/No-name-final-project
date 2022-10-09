import tw from "twin.macro"
import { ReturnButton } from "../components/shared/ReturnButton"
import { SignUpUserForm } from "../components/forms/SingUpUserForm"

export default function Home() {
  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <ReturnButton></ReturnButton>
      </div>
        <SignUpUserForm />
    </div>
  )
}