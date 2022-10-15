import tw from "twin.macro";
import React from "react"
import { Input } from "../form_widgets/Input";
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { useProduct } from "../../../hooks/useProduct";
import { TextArea } from "../form_widgets/TextArea";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";


const ToggleMassUnit: React.FC<{
  onClick: () => void
  unit: string
}> = ({ onClick, unit }) => {
  return (
    <button
      tw="bg-gray-200 h-[40px] w-[40px] bg-brand-300 text-white text-[18px] font-medium hover:bg-brand-400 rounded"
      onClick={onClick}
    >{unit}</button>
  )
}

export const RegisterProduct = () => {

  const [mass, setMass] = useState('kg')

  const toggleMass = () => {
    switch (mass) {
      case "kg":
        setMass('g')
        break
      case "g":
        setMass('Ud')
        break
      case "Ud":
        setMass('kg')
        break
    }
  }

  const { user } = useUser()

  const methods = useForm({
    mode: "onChange",
    defaultValues: { name: '', quantity: '', price: '', unit: mass, description: '', user_id: user.sub }
  })

  const router = useRouter()

  const { create_product } = useProduct()

  const { formState } = methods

  const handle_submit = methods.handleSubmit(async (data) => {

    await create_product(data)
    router.push("/register_product")

  })

  return (
    <>
      <div tw="h-full flex flex-col justify-between">
        <div tw="h-[260px] flex flex-col gap-4 mt-[160px]">
          <Input
            label="Nombre"
            error={formState.errors.name?.message.toString()}
            {...methods.register("name", {
              required: true,
            })}
          />
          <div tw="flex justify-between gap-4">
            <div tw="w-6/12">
              <Input
                type="text"
                label="Cantidad"
                error={formState.errors.quantity?.message.toString()}
                {...methods.register("quantity", {
                  required: true,
                })}
              />
            </div>
            <div tw="w-6/12 flex justify-between">
              <div tw="w-7/12">
                <Input
                  type="text"
                  label="Precio"
                  error={formState.errors.price?.message.toString()}
                  {...methods.register("price", {
                    required: true,
                  })}
                />
              </div>
              <ToggleMassUnit
                unit={mass}
                onClick={() => toggleMass()}
              />
            </div>
          </div>
          <TextArea
            label="Descripción"
            maxTypes="30"
            error={formState.errors.description?.message.toString()}
            {...methods.register("description", {
              required: true,
              minLength: { value: 3, message: "" },
              maxLength: { value: 90, message: "30 caracteres máximo" },
            })}
          />
        </div>
      </div>
      <div>
        <Button
          disabled={!formState.isValid}
          onClick={() => handle_submit()}>
          {formState.isValid ? 'finalizar' : 'complete los campos'}
        </Button>
      </div>
    </>
  )
}