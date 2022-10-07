import tw from "twin.macro"
import { Input } from "./form_widgets/Input";
import { ReturnButton } from "../shared/ReturnButton";
import { NextButton } from "../shared/NextButton";
import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";

export const RegisterProductForm = () => {

  // const [producer, setProducer] = useState("")
  const [name, setName] = useState("")
  // const [quantity, setQuantity] = useState("")
  // const [price, setPrice] = useState("")
  // const [expiration, setExpiration] = useState("")
  // const [description, setDescription] = useState("")

  const { create_product } = useProduct()

  const handle_submit = async () => {
    const product = {
      // producer,
      name,
      // quantity,
      // price,
      // expiration,
      // description
    }
    console.log("product updated")
    console.log(product)
    await create_product(product)
    console.log("product created")
    
  }

  return(
    <>
      <div tw="flex flex-col gap-2">
        <Input name="product_name" type="text" label="label" placeholder="nombre del producto" onChange={setName} />
      </div>
      <div tw="mb-[60px] mt-[40px]">
        <NextButton onClick={handle_submit} href="">Subir producto</NextButton>
      </div>
    </>
  )
}