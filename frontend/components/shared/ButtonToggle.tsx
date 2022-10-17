import tw from "twin.macro";
import Link from "next/link";


export const ButtonToggle: React.FC<{
  children: string;
  href?: string;
  onClick: () => void;
}> = ({ children, href, onClick }) => {
  return (
    <button
      onClick={onClick}
      tw="px-[20px] bg-transparent outline-none relative text-center"
    >
      {children}
      {/* <Link href={href}>{children}</Link> */}
    </button>
  )
}