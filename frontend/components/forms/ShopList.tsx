import tw from "twin.macro";
import useSWR from "swr"
import { ShopItems } from "./ShopListItems/ShopItem";
import { ProductContext } from "../../hooks/useProduct";
import { Product } from "../../hooks/IProduct";
import { ShopSwitch } from "./ShopListItems/ShopSwitch";


export const ShopList = () => {
  const {data: products} = useSWR<Product[]>('/products',{refreshInterval: 5000})
  
  return(
    <ShopSwitch>
      {products && products.map((product) => (
        <ProductContext.Provider
          key={product._id}
          value={{product}}
        >
          <ShopItems></ShopItems>
        </ProductContext.Provider>
      ))}
      {!products && <p>Cargando...</p>}
    </ShopSwitch>
  )
}