import tw from "twin.macro"
import { ReturnButton } from "../../components/shared/ReturnButton";
import { NavBar } from "../../components/NavBar";
import { ProductListIdFilter, ProductListIdFilterDelete } from "../../components/forms/ShopListItems/ProductListIdFilter";

const Page = () => {

  return (
    <>
      <div tw="h-[90px] w-full">
        <div tw="h-full mx-auto gap-10 w-10/12 overflow-hidden">
          <NavBar href="/register_product" mode="backNav" />
        </div>
      </div>
      <div tw="h-full w-full bg-brand-100">
        <div tw="h-full mx-auto gap-10 w-10/12 overflow-hidden">
          <div tw="w-[255px] h-[84%] my-2 overflow-scroll">
            <ProductListIdFilterDelete />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;