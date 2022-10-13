import tw from "twin.macro";
import Link from "next/link";

export const ButtonLink: React.FC<{
  children: string;
  href: string;
  variant?: "white" | "color" | "delete";
  disabled?: boolean;
}> = ({
  children,
  href,
  variant = "white",
  disabled = false
}) => {
    return (
      <button
        css={[
          tw`h-[36px] w-full bg-white text-brand-800 hover:bg-brand-50`,
          variant == "color" && tw`bg-brand-800 text-white`,
          variant == "delete" && tw`bg-red-200 text-red-800`,
          disabled && tw``
        ]}
        {...(disabled ? { disabled: true } : {})}
      >
        <Link href={href}>{children}</Link>
      </button>
    )
  }