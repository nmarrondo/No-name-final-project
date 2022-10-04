import tw from "twin.macro"
import { Input } from "./form_widgets/Input";
import { ReturnButton } from "../shared/ReturnButton";
import { NextButton } from "../shared/NextButton";
import { useState } from "react";

export const RegisterProductForm = () => {

  // const [producer, setProducer] = useState("")
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [expiration, setExpiration] = useState("")
  const [description, setDescription] = useState("")

  const handle_submit = () => {
    const product = {
      // producer,
      name,
      quantity,
      price,
      expiration,
      description
    }
    console.log("product updated")
    console.log(product)
  }

  return(
    <>
      <div tw="flex flex-col gap-2">
        {/* <Input name="producer_name" type="text" placeholder="nombre del productor" onChange={setProducer} /> */}
        <Input name="product_name" type="text" label="label" placeholder="nombre del producto" onChange={setName} />
        <Input name="product_quantity" type="text" label="label" placeholder="cantidad" onChange={setQuantity} />
        <Input name="product_price" type="text" label="label" placeholder="precio" onChange={setPrice} />
        <Input name="product_expires" type="date" label="label" placeholder="caducidad" onChange={setExpiration} />
        <Input name="product_description" type="text" label="label" placeholder="descripción" onChange={setDescription} />
      </div>
      <div tw="mb-[60px] mt-[40px]">
        <NextButton onClick={handle_submit} href="">Subir producto</NextButton>
      </div>
    </>
  )
}