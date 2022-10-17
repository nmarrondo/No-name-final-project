import tw from "twin.macro";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";


export const Localization = () => {
  return(
    <div 
      tw="flex items-center gap-1 font-medium text-brand-300 hover:text-brand-400"
      style={{
        WebkitTransition: 'all 300ms',
        transition: 'all 300ms', 
      }}
    >
      <Link href="">Localización</Link>
      <BiChevronDown tw="w-[20px] h-[20px]"/>

    </div>
  )
}