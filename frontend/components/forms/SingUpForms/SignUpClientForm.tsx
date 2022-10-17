import tw from "twin.macro";
import React from "react"
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { Input } from "../form_widgets/Input";
import { useUserHook } from "../../../hooks/useUser";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";


export const SignUpClientForm = () => {

  const { user } = useUser()

  const methods = useForm({
    mode: "onChange",
    defaultValues: { role: 'client', name: '', telephone: '', mail: user.mail, user_id: user.sub }
  })

  const router = useRouter()

  const { create_user } = useUserHook()

  const { formState } = methods

  const handle_submit = methods.handleSubmit(async (data) => {

    await create_user(data)
    router.push("/")

  })

  return (
    <>
      <div tw="h-[75%]">
        <div tw="flex flex-col gap-4 mt-[180px]">
          <Input
            label="Nombre"
            error={formState.errors.name?.message.toString()}
            {...methods.register("name", {
              required: true,
              minLength: { value: 3, message: "Longitud mínima 3" },
            })}
          />
          <Input
            label="Teléfono"
            error={formState.errors.telephone?.message.toString()}
            {...methods.register("telephone", {
              required: true,
              pattern: {
                value: /^(\+34|0034|34)?[6789]\d{8}$/, message: "Teléfono no válido"
              },
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


