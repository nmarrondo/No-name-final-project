import tw from "twin.macro"
import { NavBar } from "../components/NavBar"
import { Body } from "../components/shared/Body"
import { Button } from "../components/shared/Button"

export default function Home() {
  return (
    <div tw="h-full flex flex-col mx-auto w-10/12 overflow-hidden">
      <div>
        <NavBar mode="backNav" />
      </div>

      <div tw="h-full flex items-center">
        <div tw="flex w-full flex-col gap-4">
          <Button href="/register_product/upload">Subir un producto</Button>
          <Button href="/register_product/overview">Ver mis Productos</Button>
        </div>
      </div>

    </div>
  )
}