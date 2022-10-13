import tw from "twin.macro";
import { SmartphoneBack } from "./design-layout/screen/SmartphoneBack";
import { AppControl } from "./design-layout/appControl/AppControl";
import { Claim } from "./design-layout/claim/Claim";

export const Layout:React.FC<{children:any}>= ({children}) => {

  return(
    <div tw="h-screen flex flex-row items-center">
      <div>
        <SmartphoneBack>{children}</SmartphoneBack>
      </div>
      <div tw="flex flex-col gap-12 z-10">
        <Claim />
        <AppControl />
      </div>
      <div tw="z-0 h-[260px] w-[260px] bg-brand-200 mt-[110px] ml-[650px] absolute rounded-full"></div>

    </div>
  )
}
