import tw from "twin.macro"
import { AppControlItem } from "./AppControlItem"

export const AppControl = () => {
  return (
    <nav tw="flex w-[560px] h-[40px] bg-white divide-x rounded-full overflow-hidden">
      <AppControlItem href="/">Home</AppControlItem>
      <AppControlItem href="/product_list">Market</AppControlItem>
      <AppControlItem href="/product_upload">Trade up</AppControlItem>
    </nav>
  )
}