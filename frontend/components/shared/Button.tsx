import tw from "twin.macro";

export const Button:React.FC<{
    children;
    variant?: "base" | "submit" | "delete";
    onClick?: () => void;
  }> = ({children, variant = "base", onClick}) => {
    return(
      <button 
        onClick = {onClick}
        css={[
          tw`bg-gray-200 hover:bg-gray-300 h-[40px] w-full flex justify-center items-center`,
          variant == "submit" && tw`bg-green-300 text-green-800`,
          variant == "delete" && tw`bg-red-300 text-red-800`
        ]}
      >
        {children}
      </button>
    )
}