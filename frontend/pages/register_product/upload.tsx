import tw from "twin.macro"
import { NavBar } from "../../components/NavBar";
import { RegisterProduct } from "../../components/forms/RegisterProductForms/RegisterProduct";

const Page = () => {

  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <NavBar mode="backNav" />
      </div>
      <div>
        <RegisterProduct></RegisterProduct>
      </div>
    </div>
  )
}

export default Page;