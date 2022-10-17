import tw from "twin.macro";
import Link from "next/link";


export const UserSectionBody:React.FC<{children:any;}> = ({children}) => {
  return(
    <div tw="bg-brand-200 h-[200px]">
    <div tw="w-10/12 flex flex-col justify-between mx-auto overflow-hidden">
      {children}
    </div>
  </div>
  )
}