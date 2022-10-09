import tw from "twin.macro"
import { RegisterProductForm } from "../components/forms/RegisterProductForm";
import { ReturnButton } from "../components/shared/ReturnButton";
import { NavBar } from "../components/NavBar";

const Page = () => {

  return( 
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <ReturnButton></ReturnButton>
      </div>
        <RegisterProductForm />
    </div>
  )
}

export default Page;