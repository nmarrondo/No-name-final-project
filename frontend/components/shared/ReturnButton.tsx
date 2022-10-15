import tw from "twin.macro";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";


const ButtonStyle: React.FC<{
  children: any;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      tw="ml-[-10px]">{children}</button>
  )
}

const IconStyle = () => {
  return (
    <IoChevronBackSharp
      tw="h-[36px] w-[36px] text-brand-300 hover:text-brand-400 transition-all"
    />
  )
}

export const ReturnButton: React.FC<{ href?: string }> = ({ href }) => {
  const goBack = () => window.history.back()
  return (
    <>
      {href &&
        <Link href={href}>
          <ButtonStyle>
            <IconStyle />
          </ButtonStyle>
        </Link>
      }
      {
        !href &&
        <ButtonStyle onClick={goBack}>
          <IconStyle />
        </ButtonStyle>
      }
    </>
  )
}