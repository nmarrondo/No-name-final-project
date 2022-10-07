import React, {useContext} from "react";
import { Product } from "./IProduct";
import { BASE_URL } from "../lib/config"

const create_product = async (data): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  return res.json()
}

const delete_product = async (product_id:string) => {
  const res = await fetch (`${BASE_URL}/the-good-shop.products/${product_id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  return res.json()
}

export interface ProductOptions {
  allowDelete?: boolean
}

export const ProductContext = React.createContext<{
  product?: Product
  options?: ProductOptions
}>({})

export const useProduct = (): {
  product?: Product
  allowDelete: boolean
  delete_product: () => void
  create_product: (data: any) => Promise<Product>
} => {
  const { product, options} = useContext(ProductContext)
  let allowDelete = options?.allowDelete || false
  return {
    product,
    allowDelete,
    delete_product: () => delete_product(product._id),
    create_product,
  }
}