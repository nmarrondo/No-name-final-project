import tw from "twin.macro";
import useSWR from "swr"
import { ProductContext } from "../../../hooks/useProduct";
import { Product } from "../../../hooks/IProduct";
import { UserContext } from "@auth0/nextjs-auth0";
import { User } from "../../../hooks/IUser";
import { ButtonLink } from "../../shared/ButtonLink";
import { styled } from "twin.macro";
import Link from "next/link";
import { useState } from "react";

const ButtonToggle: React.FC<{
  children: string;
  href: string;
  onClick: () => void;
}> = ({children, href, onClick }) => {
    return (
      <button
        onClick={onClick}
        tw="px-[20px] bg-transparent outline-none relative text-center"
      >
        <Link href={href}>{children}</Link>
      </button>
    )
  }


export const LayoutShop: React.FC<{ children: any }> = ({ children }) => {
  
  const [toggle, settoggle] = useState('left')

  return (
    <div tw="h-[456px] mt-[80px]">
      <div tw="w-full h-[36px]flex justify-between bg-gray-200 relative">
          <div 
            css={[
              toggle == "left" && tw`absolute w-[60%] h-[100%] bg-gray-800 rounded-full ml-[-20px]`,
              toggle == "right" && tw`absolute w-[60%] h-[100%] bg-gray-800 rounded-full ml-[120px]`
            ]} 
            style={{transition: "0.5s cubic-bezier(0,0,0,1)"}}></div>
          <ButtonToggle
            href="/shop/product_list"
            onClick={() => settoggle("left")}
          >Producto</ButtonToggle>
          <ButtonToggle 
            href="/shop/productor_list"
            onClick={() => settoggle("right")}
          >Vendedor</ButtonToggle>
      </div>


      <div
        tw="overflow-scroll w-[248px] h-full flex flex-col gap-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {children}
      </div>
    </div>
  )
}