import tw from "twin.macro";
import useSWR from "swr"
import { ProductShopCard } from "./ProductShopCard";
import { ProductContext } from "../../../hooks/useProduct";
import { Product } from "../../../hooks/IProduct";
import { useUser } from "@auth0/nextjs-auth0";
import qs from "querystring"


export const ProductListIdFilter = () => {
  const { user } = useUser()

  const filter = {
    'user_id': `${user?.sub}`
  };
  const { data: products, mutate } = useSWR<Product[]>(`/products?${qs.stringify(filter)}`, { refreshInterval: 5000 })

  return (
    <>
      {products && products.map((product) => (
        <ProductContext.Provider
          key={product._id}
          value={{ product }}
        >
          <ProductShopCard onDelete={() => mutate()} />
        </ProductContext.Provider>
      ))}
      {!products && <p>Cargando...</p>}
    </>
  )
}

export const ProductListIdFilterDelete = () => {
  const { user } = useUser()

  const filter = {
    'user_id': `${user?.sub}`
  };
  const { data: products, mutate } = useSWR<Product[]>(`/products?${qs.stringify(filter)}`, { refreshInterval: 5000 })

  return (
    <>
      {products && products.map((product) => (
        <ProductContext.Provider
          key={product._id}
          value={{ product }}
        >
          <ProductShopCard
            variant="delete"
            onDelete={() => mutate()} />
        </ProductContext.Provider>
      ))}
      {!products && <p>Cargando...</p>}
    </>
  )
}