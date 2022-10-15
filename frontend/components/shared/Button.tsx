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
      <>
        {href &&
          <Link href={href}>
            <button
              onClick={onClick}
              css={[
                tw`h-[42px] w-full bg-brand-300 text-white font-medium hover:bg-brand-400 rounded`,
                variant == "white" && tw`bg-white text-gray-800`,
                variant == "delete" && tw`bg-red-200 text-red-800`,
                disabled && tw`bg-brand-200 hover:bg-brand-200 cursor-auto`
              ]}
              style={{
                WebkitTransition: 'all 300ms',
                transition: 'all 300ms',
              }}
              {...(disabled ? { disabled: true } : {})}
            >
              {children}
            </button>
          </Link>}
        {!href &&
          <button
            onClick={onClick}
            css={[
              tw`h-[42px] w-full bg-brand-300 text-white font-medium hover:bg-brand-400 rounded`,
              variant == "white" && tw`bg-white text-gray-800`,
              variant == "delete" && tw`bg-red-200 text-red-800`,
              disabled && tw`bg-brand-200 hover:bg-brand-200 cursor-auto`
            ]}
            style={{
              WebkitTransition: 'all 300ms',
              transition: 'all 300ms',
            }}
            {...(disabled ? { disabled: true } : {})}
          >
            {children}
          </button>
        }
      </>
    )
  }
