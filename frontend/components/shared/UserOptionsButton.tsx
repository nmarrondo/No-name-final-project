import tw from "twin.macro";
import Link from "next/link";


export const UserOptionsButton:React.FC<{children:any; href:string}> = ({children, href}) => {
  return(
    <button tw="h-[36px] w-full bg-gray-200">
      <Link href={href}>{children}</Link>
    </button>
  )
}