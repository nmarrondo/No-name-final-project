import tw from "twin.macro";
import Link from "next/link";
import { HiUserCircle } from "react-icons/hi";


export const ProfileButton = () => {
  return(
    <button tw="h-[36px] w-[36px]">
      <Link href="user_options">
        <HiUserCircle 
          tw="w-full h-full text-brand-300 hover:text-brand-400"
          style={{
            WebkitTransition: 'all 300ms',
            transition: 'all 300ms', 
          }}
        />
      </Link>
      
    </button>
  )
}