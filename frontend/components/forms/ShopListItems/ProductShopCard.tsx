import tw from "twin.macro";
import { useProduct } from "../../../hooks/useProduct";
import { Button } from "../../shared/Button";
import Link from "next/link";


const Card: React.FC<{ children: any; href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <button
        tw="bg-white h-[76px] my-2 flex flex-row items-center justify-between overflow-hidden rounded-lg"
      >
        {children}
      </button>
    </Link>

  )
}

const Picture = () => {
  return (
    <div tw="h-[160px] w-[160px] bg-brand-600 rounded-l-full"></div>
  )
}

export const ProductShopCard: React.FC<{
  onDelete?: () => void; variant?: "basic" | "delete";
}> = ({ onDelete, variant = "basic" }) => {
  const { product, delete_product, allowDelete } = useProduct()


  return (

    <div>
      <Card href={`/shop/product/${product._id}`} key={product._id}>
        <>
          <div tw="w-[138px] px-4 text-left">
            <h1 tw="font-semibold text-dark-800">{product.name}</h1>
            <p tw="text-[14px] text-dark-400">{product.quantity} {product.unit}</p>


          </div>
          <div tw="h-full w-[100px] bg-brand-300 flex flex-col justify-center items-end">
            <p tw="mx-[10px] text-brand-600 font-bold text-[26px]">{product.price}
              <span tw="text-[14px] font-normal">€/{product.unit}</span>
            </p>

          </div>

        </>
      </Card>
      {variant == "delete" &&
        <div tw="mt-[-6px] mx-4 mb-4">
          <Button
            variant="delete"
            onClick={async () => {
              await delete_product();
              onDelete();
            }}
          >
            Eliminar

          </Button>
        </div>}
    </div>
  )
}