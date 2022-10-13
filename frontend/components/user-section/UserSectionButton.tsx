import tw from "twin.macro";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";



export const UserSectionButton:React.FC<{children:any; href:string}> = ({children, href}) => {
  return(
    <Link href={href}>
      <button 
        tw="h-[36px] w-full text-dark-800 pl-2 flex justify-between items-center hover:bg-dark-100"
        style={{
          WebkitTransition: 'all 300ms',
          transition: 'all 300ms', 
          }}
      >
        <>
          {children}
          <IoChevronForwardSharp tw="h-[36px] w-[16px]"/>
        </>
      </button>
    </Link>
  )
}