import tw from "twin.macro";
import { useRouter } from "next/router";
import { Product } from "../../../hooks/IProduct";
import useSWR from "swr";
import { ProductContext, useProduct } from "../../../hooks/useProduct";
import { UserContext } from "../../../hooks/useUser";
import { NavBar } from "../../../components/NavBar";
import qs from "querystring"
import { User } from "@auth0/auth0-react";
import { AiOutlineWhatsApp } from "react-icons/ai"


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

  const filter = {
    'user_id': `${product?.user_id}`
  };
  const { data: producerArr } = useSWR<User[]>(`/users?${qs.stringify(filter)}`, { refreshInterval: 5000 })

  const producer = producerArr ? producerArr[0] : null

  console.log(producerArr)

  return (

    <>
      <div tw="h-[45%] w-full bg-brand-100">
        <div tw="h-full mx-auto gap-10 w-10/12 overflow-hidden">
          <NavBar mode="backNav" />
        </div>
      </div>
      <div tw="h-full">
        <div tw="mx-auto w-10/12 divide-y">
          <div tw="my-6 flex flex-col gap-6">
            <div tw="flex flex-row justify-between">
              <div tw="flex flex-col">
                <h1 tw="text-[26px] font-medium text-dark-800">{product?.name}</h1>
                <p tw="text-dark-400">{product?.quantity}{product?.unit}</p>
              </div>
              <div tw="flex flex-col text-right">
                <p tw="text-[26px] text-dark-800 font-medium">{product?.price}</p>
                <p tw="text-dark-800">€/{product?.unit}</p>
              </div>
            </div>
            <p tw="text-dark-400">{product?.description}</p>
          </div>

          <div>
            <div tw="my-6 flex flex-col gap-2">
              <p>Contacta con {producer?.name}</p>
              <p tw="text-brand-800 flex flex-row gap-2">{producer?.telephone}<AiOutlineWhatsApp tw="my-auto h-[20px] w-[20px]" /></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;