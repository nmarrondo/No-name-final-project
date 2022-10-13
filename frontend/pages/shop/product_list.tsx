import tw from "twin.macro"
import { ProductList } from "../../components/forms/ShopListItems/ProductList"; 
import { NavBar } from "../../components/NavBar";
import { LayoutShop } from "../../components/forms/ShopListItems/LayoutShop";
import { Body } from "../../components/shared/Body";

const Page = () => {
  return(
    <Body variant="white">
      <NavBar mode="shopNav" />
      <LayoutShop>
        <ProductList/>  
      </LayoutShop>
    </Body>
  )
}

export default Page;