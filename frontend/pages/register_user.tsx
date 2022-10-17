import tw from "twin.macro"
import { SignUpUserForm } from "../components/forms/SingUpUserForm"
import { NavBar } from "../components/NavBar"
import { Body } from "../components/shared/Body"

export default function Home() {
  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <NavBar mode="backNav" />
      </div>
      <SignUpUserForm />
    </div>
  )
}