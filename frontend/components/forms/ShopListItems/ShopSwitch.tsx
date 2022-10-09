import tw from "twin.macro";

export const ShopSwitch:React.FC<{children:any}> = ({children}) => {
  return(
    <>
    <div tw="w-full h-[60px] flex justify-between bg-gray-200">
      <button tw="mx-auto">producto</button><button tw="mx-auto">vendedor</button>
    </div>
    <div tw="overflow-scroll w-[255px] flex flex-col gap-4">
      {children}
    </div>
    </>
  )
}