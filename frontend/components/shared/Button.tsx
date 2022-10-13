import tw from "twin.macro";
import Link from "next/link";

export const Button: React.FC<{
  children: any;
  href?: string;
  variant?: "color" | "white" | "delete";
  disabled?: boolean;
  onClick?: () => void;
}> = ({
  children,
  href,
  variant = "color",
  disabled = false,
  onClick
}) => {
    return (
      <button
        onClick={onClick}
        css={[
          tw`h-[42px] w-full bg-brand-300 text-white font-medium hover:bg-brand-400 rounded`,
          variant == "white" && tw`bg-white text-gray-800`,
          variant == "delete" && tw`bg-red-200 text-red-800`,
          disabled && tw`opacity-50`
        ]}
        style={{
          WebkitTransition: 'all 300ms',
          transition: 'all 300ms', 
        }}
        {...(disabled ? { disabled: true } : {})}
      >
        {href && <Link href={href}>{children}</Link>}
        {!href && <a>{children}</a>}
      </button>
    )
  }

// export const Button:React.FC<{
//     children;
//     variant?: "base" | "submit" | "delete";
//     onClick?: () => void;
//   }> = ({children, variant = "base", onClick}) => {
//     return(
//       <button 
//         onClick = {onClick}
//         css={[
//           tw`bg-gray-200 hover:bg-gray-300 h-[40px] w-full flex justify-center items-center`,
//           variant == "submit" && tw`bg-green-300 text-green-800`,
//           variant == "delete" && tw`bg-red-300 text-red-800`
//         ]}
//       >
//         {children}
//       </button>
//     )
// }
