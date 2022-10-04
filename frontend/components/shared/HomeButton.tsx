import tw from "twin.macro";
import Link from "next/link";
import styled from "@emotion/styled/types/base";



export const HomeButton:React.FC<{children:any, href:string}> = ({children, href}) => {
  return(
    <button tw="bg-gray-200 hover:bg-gray-300 h-[40px] w-full flex justify-center items-center">
      <Link href={href}>{children}</Link>
    </button>
  )
}