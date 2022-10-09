import tw from "twin.macro";
import { useProduct } from "../../../hooks/useProduct";


export const ShopItems = () => {
  const { product } = useProduct()
  return(
    <div key={product._id} tw="bg-gray-200">
      <p>{product.name}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>
    </div>
  )
}