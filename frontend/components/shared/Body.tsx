import tw from "twin.macro";

export const Body: React.FC<{
  children: any;
  variant?: "color" | "white" | "user"
}> = ({ children, variant = "main" }) => {
  return (
    <div css={[
      tw`h-full w-full bg-brand-100`,
      variant == "white" && tw`h-full w-full bg-white`,
      variant == "user" && tw`h-full w-full bg-white`,
    ]}
    >
      <div css={[
        tw`h-full mx-auto gap-10 w-10/12 overflow-hidden`,
        variant == "white" && tw`h-full mx-auto gap-10 w-10/12 overflow-hidden`,
        variant == "user" && tw`flex flex-col gap-4 py-[30px] w-10/12 mx-auto`
      ]}>
        {children}
      </div>
    </div>
  )
}