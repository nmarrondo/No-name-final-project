import tw from "twin.macro";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";



export const UserSectionInput:React.FC<{placeholder:string}> = ({placeholder}) => {
  return(
      <input 
        placeholder={placeholder}
        tw="h-[36px] w-full placeholder:text-dark-800 pl-2 flex justify-between items-center hover:bg-dark-100"
        style={{
          WebkitTransition: 'all 300ms',
          transition: 'all 300ms', 
          }}
      />
  )
}