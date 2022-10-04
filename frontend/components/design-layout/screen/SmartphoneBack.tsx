import tw, { styled } from "twin.macro";
import { ScreenTopIcons } from "./ScreenTopIcons";
import { ScreenBotIcons } from "./ScreenBotIcons";

const Screen = styled.div``

export const SmartphoneBack:React.FC<{children:any}> = ({children}) => {
  return (
      <Screen tw="mx-[90px] h-[598px] w-[286px] bg-white rounded-[30px] overflow-hidden">
        <div tw="h-[5%]">
          {/* <ScreenTopIcons /> */}
        </div>
        <div tw="h-[90%]">
          {children}
        </div>
        <div tw="h-[5%]">
          {/* <ScreenBotIcons /> */}
        </div>
        
      </Screen>
  )
}