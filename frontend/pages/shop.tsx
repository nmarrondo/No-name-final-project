import tw from "twin.macro"
import { NavBar } from "../components/NavBar";

const Page = () => {
  return(
    <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
      <NavBar mode="shopNav" />     
    </div>
  )
}

export default Page;