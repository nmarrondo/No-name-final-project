import tw from "twin.macro"
import { ShopList } from "../components/forms/ShopList";
import { NavBar } from "../components/NavBar";

const Page = () => {
  return(
    <div tw="h-full flex flex-col justify-between mx-auto gap-4 w-10/12 overflow-hidden">
      <NavBar mode="shopNav" />   
      <ShopList/>  
    </div>
  )
}

export default Page;