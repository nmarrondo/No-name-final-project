import tw from "twin.macro"

export const ScreenTopIcons= () => {
  return (
    <div tw="flex items-center place-content-between px-6 py-1.5">
      <div tw="text-xs">HH:MM</div>
      <div tw="flex gap-[2px]">
        <div tw="h-3 w-3 bg-gray-800"></div>
        <div tw="h-3 w-3 bg-gray-800"></div>
        <div tw="h-3 w-3 bg-gray-800"></div>
      </div>
    </div>
  )
}