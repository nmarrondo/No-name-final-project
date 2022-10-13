import tw from "twin.macro";
import { useRouter } from "next/router";
import { Product } from "../../../hooks/IProduct";
import useSWR from "swr";
import { ProductContext, useProduct } from "../../../hooks/useProduct";
import { NavBar } from "../../../components/NavBar";

const ProductDetail = () => {
  const { product } = useProduct();

  return (
    <>
      <p>{product.name}</p>
      <div>
        <p>{product.quantity}</p>
        <p>{product.price}</p>
      </div>
      <p>{product.description}</p>
    </>
  );
};

const Page = () => {
  const router = useRouter();
  const {
    query: { product_id },
  } = router;

  const { data: product } = useSWR<Product>(
    product_id ? `/products/${product_id}` : null
  );

  return (
  
      <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
        <NavBar mode="backNav" />
        {product && (
          <ProductContext.Provider value={{ product }}>
            <ProductDetail />
          </ProductContext.Provider>)}
      </div>
    

     
  );
};

export default Page;