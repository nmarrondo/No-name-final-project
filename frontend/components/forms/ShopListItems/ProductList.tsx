import tw from "twin.macro";
import useSWR from "swr"
import { ProductShopCard } from "./ProductShopCard";
import { ProductContext } from "../../../hooks/useProduct"; 
import { Product } from "../../../hooks/IProduct"; 
import { useUser } from "@auth0/nextjs-auth0";
import qs from "querystring"


export const ProductList = () => {
  const {data: products} = useSWR<Product[]>('/products',{refreshInterval: 5000})

  return(
    <>
      {products && products.map((product) => (
        <ProductContext.Provider
          key={product._id}
          value={{product}}
        >
          <ProductShopCard></ProductShopCard>
        </ProductContext.Provider>
      ))}
      {!products && <p>Cargando...</p>}
    </>
  )
}