import tw from "twin.macro";
import Link from "next/link";

export const ProfileButton = () => {
  return(
    <button tw="h-[36px] w-[36px] bg-gray-200 hover:bg-gray-300">
      <Link href="user_options">U</Link>
    </button>
  )
}