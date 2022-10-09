import tw from "twin.macro";
import Link from "next/link";

export const ButtonLink:React.FC<{children:string, href:string}> = ({children, href}) => {
  return(
    <button tw="h-[36px] w-full bg-gray-200 hover:bg-gray-300">
      <Link href={href}>{children}</Link>
    </button>
  )
}