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
      <div tw="flex flex-col gap-12">
        <Claim />
        <AppControl />
      </div>
    </div>
  )
}
