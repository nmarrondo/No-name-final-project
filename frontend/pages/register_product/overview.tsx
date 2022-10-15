import tw from "twin.macro"
import { ReturnButton } from "../../components/shared/ReturnButton";
import { NavBar } from "../../components/NavBar";
import { ProductListFilteredUserID } from "../../components/forms/ShopListItems/ProductListFilter";
import { LayoutShop } from "../../components/forms/ShopListItems/LayoutShop";


const Page = () => {

  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <ReturnButton></ReturnButton>
      </div>
      <div tw="overflow-scroll w-[255px] h-full flex flex-col gap-4">
        <ProductListFilteredUserID></ProductListFilteredUserID>
      </div>
    </div>
  )
}

export default Page;