import tw from "twin.macro";
import { useRouter } from "next/router";
import { User } from "../../../hooks/IUser";
import useSWR from "swr";
import { UserContext, useUserHook } from "../../../hooks/useUser";
import { ProductContext, useProduct } from "../../../hooks/useProduct";
import { NavBar } from "../../../components/NavBar";
import { Product } from "../../../hooks/IProduct";
import qs from "querystring"
import { ButtonToggle } from "../../../components/shared/ButtonToggle";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai"
import { ProductShopCard } from "../../../components/forms/ShopListItems/ProductShopCard";
import Link from "next/link";



// const ProductorDetail = () => {
//   const { user } = useUserHook();

//   return (
//     <>
//       <p>{user.name}</p>
//       <p>{user.description}</p>
//     </>
//   );
// };

const Card: React.FC<{ children: any; href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <button
        tw="h-[42px] w-full py-8 flex flex-row items-center justify-between hover:bg-dark-100"
        style={{
          WebkitTransition: 'all 300ms',
          transition: 'all 300ms',
        }}
      >
        {children}
      </button>
    </Link>

  )
}

const ProductShopCardSm = () => {
  const { product } = useProduct()


  return (
    <Card href={`/shop/product/${product._id}`} key={product._id}>
      <>
        <div tw="px-4 text-left">
          <h1 tw="font-semibold text-dark-800">{product.name}</h1>
          <p tw="text-[14px] text-dark-400">{product.quantity} {product.unit}</p>
        </div>
        <div tw="px-6 text-right">
          <p tw="font-semibold text-dark-800">{product.price}</p>
          <p tw="text-[14px] text-dark-400">€/{product.unit}</p>
        </div>
      </>
    </Card>
  )
}

const ProductorIdList = () => {

  const router = useRouter();

  const {
    query: { productor_id },
  } = router;

  const { data: user } = useSWR<User>(
    productor_id ? `/users/${productor_id}` : null
  );

  const filter = {
    'user_id': `${user?.user_id}`
  };
  const { data: products } = useSWR<Product[]>(`/products?${qs.stringify(filter)}`, { refreshInterval: 5000 })

  console.log(products)

  return (
    <>
      {products && products.map((product) =>
      (<ProductContext.Provider
        key={product._id}
        value={{ product }}
      >
        <ProductShopCardSm />
      </ProductContext.Provider>

      ))}
      {!products && <div>no user</div>}
    </>
  )
}

const Page = () => {

  const [toggle, settoggle] = useState('left')

  const router = useRouter();

  const {
    query: { productor_id },
  } = router;

  const { data: user } = useSWR<User>(
    productor_id ? `/users/${productor_id}` : null
  );

  const filter = {
    'user_id': `${user?.user_id}`
  };
  const { data: products } = useSWR<Product[]>(`/products?${qs.stringify(filter)}`, { refreshInterval: 5000 })

  console.log(products)

  return (
    <>
      <div tw="h-[45%] w-full bg-brand-100">
        <div tw="h-full mx-auto gap-10 w-10/12 overflow-hidden">
          <NavBar mode="backNav" />
        </div>
      </div>


      <div tw="h-full">

        <div tw="mx-auto w-10/12 h-[36px]flex justify-between relative">
          <div
            css={[
              toggle == "left" && tw`absolute mt-[34px] w-[50%] h-[4px] bg-brand-300`,
              toggle == "right" && tw`absolute mt-[34px] ml-[50%] w-[50%] h-[4px] bg-brand-300`
            ]}
            style={{ transition: "0.5s cubic-bezier(0,0,0,1)" }}></div>
          <div></div>
          <ButtonToggle
            onClick={() => settoggle("left")}
          >Descripción</ButtonToggle>
          <ButtonToggle
            onClick={() => settoggle("right")}
          >Productos</ButtonToggle>
        </div>

        <div tw="mx-auto w-10/12 divide-y">

          {user && toggle == "left" && (
            <UserContext.Provider value={{ user }}>
              <div tw="my-6 flex flex-col gap-6">
                <div tw="h-[120px]">
                  <h1 tw="text-[26px] font-medium text-dark-800">{user?.name}</h1>
                  <p tw="text-dark-400">{user?.description}</p>
                </div>
              </div>
              <div>
                <div tw="my-6 flex flex-col gap-2">
                  <p>Contacta con {user?.name}</p>
                  <p tw="text-brand-800 flex flex-row gap-2">{user?.telephone}<AiOutlineWhatsApp tw="my-auto h-[20px] w-[20px]" /></p>
                </div>
              </div>
            </UserContext.Provider>
          )}
          {!user && <div>no user</div>}


          {user && toggle == "right" &&
            <div tw="overflow-hidden">
              <div tw="mt-2 h-[285px] w-[248px] overflow-scroll divide-y">
                <ProductorIdList />
              </div>
            </div>
          }
        </div>
      </div>



    </>
  );
};

export default Page;


// import tw from "twin.macro";
// import { useRouter } from "next/router";
// import { User } from "../../../hooks/IUser";
// import useSWR from "swr";
// import { UserContext, useUserHook } from "../../../hooks/useUser";
// import { NavBar } from "../../../components/NavBar";

// const ProductorDetail = () => {
//   const { user } = useUserHook();

//   return (
//     <>
//       <p>{user.name}</p>
//       <p>{user.description}</p>
//     </>
//   );
// };

// const Page = () => {
//   const router = useRouter();
//   const {
//     query: { productor_id },
//   } = router;

//   const { data: user } = useSWR<User>(
//     productor_id ? `/users/${productor_id}` : null
//   );

//   return (

//     <div tw="h-full flex flex-col justify-between mx-auto gap-10 w-10/12 overflow-hidden">
//       <NavBar mode="backNav" />
//       {user && (
//         <UserContext.Provider value={{ user }}>
//           <ProductorDetail />
//         </UserContext.Provider>)}{!user && <div>no user</div>}
//     </div>



//   );
// };

// export default Page;