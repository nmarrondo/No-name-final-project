import tw from "twin.macro";
import { SmartphoneBack } from "./design-layout/screen/SmartphoneBack";
import { AppControl } from "./design-layout/appControl/AppControl";
import { Claim } from "./design-layout/claim/Claim";

export const Layout: React.FC<{ children: any }> = ({ children }) => {

  return (
    <div tw="h-screen flex flex-row items-center">
      <div>
        <SmartphoneBack>{children}</SmartphoneBack>
      </div>
      <div tw="flex flex-col gap-12 z-10">
        <Claim />
        <AppControl />
      </div>
      <div tw="z-0 h-[260px] w-[260px] mt-[170px] ml-[700px] rotate-[50deg] hover:rotate-[40deg] transition-all absolute">
        <img
          src="/pantallas_layout.png"
          tw="h-full w-full"
        />
      </div>

    </div>
  )
}
