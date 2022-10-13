import tw from "twin.macro"
import { ProductorList } from "../../components/forms/ShopListItems/ProductorList";
import { NavBar } from "../../components/NavBar";
import { LayoutShop } from "../../components/forms/ShopListItems/LayoutShop";


const Page = () => {
  return(
    <div tw="h-full flex flex-col justify-between mx-auto gap-4 w-10/12 overflow-hidden">
      <NavBar mode="shopNav" />
      <LayoutShop>  
        <ProductorList/>
      </LayoutShop>   
    </div>
  )
}

export default Page;