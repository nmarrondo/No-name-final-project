import tw from "twin.macro";
import Link from "next/link";


export const AppControlItem:React.FC<{children:any; href:string}> = ({children, href}) => {
  return(
    <button tw="h-full w-full hover:bg-gray-100 ">
      <Link href={href}>{children}</Link>
    </button>
  )
}