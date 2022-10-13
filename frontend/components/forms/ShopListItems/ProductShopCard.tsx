import tw from "twin.macro";
import { useProduct } from "../../../hooks/useProduct";
import { Button } from "../../shared/Button";
import Link from "next/link";


const Card:React.FC<{children:any; href:string}> = ({children, href}) => {
  return(
    <Link href={href}>
      <button 
        tw="bg-white h-[80px] my-2 flex flex-row items-center justify-between overflow-hidden"
        >
          {children}
      </button>
    </Link>

  )
}

const Text:React.FC<{children:string}> = ({children}) => {
  return(
    <p tw="text-left">{children}</p>
  )
}

const Picture = () => {
  return(
    <div tw="h-[160px] w-[160px] bg-brand-600 rounded-l-full"></div>
  )
}

export const ProductShopCard: React.FC<{ onDelete?: () => void;   variant?: "basic" | "delete";
}>= ({onDelete, variant = "basic"}) => {
  const { product, delete_product, allowDelete } = useProduct()


  return(
    <Card href={`/shop/product/${product._id}`} key={product._id}>
      <>
        <div tw="w-[150px] px-4">
          <Text>{product.name}</Text>
          <Text>{product.quantity}</Text>

          {variant == "delete" && <Button
            variant="delete"
            onClick={async () => {
              await delete_product();
              onDelete();
            }}
          >
            Eliminar
            
          </Button>}
        </div>
        <Picture tw="pb-[200px]"/>
      </>
    </Card>
  )
}