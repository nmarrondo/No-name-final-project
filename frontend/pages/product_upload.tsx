import tw from "twin.macro"
import { RegisterProductForm } from "../components/forms/RegisterProductForm";
import { ReturnButton } from "../components/shared/ReturnButton";
import { NavBar } from "../components/NavBar";

const Page = () => {

  return(
    
  <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
    <div>
      <NavBar mode="backNav" />
    </div>
    <div>
      <RegisterProductForm />
    </div>
  </div>
  )
}

export default Page;