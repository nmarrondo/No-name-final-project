import tw from "twin.macro";
import React from "react"
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { Input } from "../form_widgets/Input";
import { useUser } from "../../../hooks/useUser";
import { useRouter } from "next/router";
import { useToken } from "../../../lib/TokenLoader";
import { getAccessToken } from "@auth0/nextjs-auth0"
import { ManagementClient } from "auth0";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


export const SignUpClientForm = () => {
  const [stage, setStage] = useState('stage1');

  const methods = useForm({
    mode: "onChange",
    defaultValues: { role: 'client', name: '', password: '', telephone: '', account: '', mail: 'mail', user_id: '' }
  })

  const router = useRouter()

  const { create_user } = useUser()

  const { formState } = methods


  const handle_submit = methods.handleSubmit(async (data) => {

    await create_user(data)
    router.push("/")


  })

  return (
    <>
      {stage === 'stage1' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col gap-4 mt-[180px]">
              <Input
                label="nombre"
                error={formState.errors.name?.message.toString()}
                {...methods.register("name", {
                  required: true,
                  minLength: { value: 3, message: "Longitud mínima 3" },
                })}
              />
              <Input
                label="contraseña"
                error={formState.errors.password?.message.toString()}
                {...methods.register("password", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div>
            <Button onClick={() => setStage('stage2')}>
              {formState.isValid ? 'siguiente' : 'complete los campos'}
            </Button>
          </div>
        </>
      )}

      {stage === 'stage2' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col mt-[200px]">
              <Input
                label="telefono"
                error={formState.errors.telephone?.message.toString()}
                {...methods.register("telephone", {
                  required: true,
                })}
              />
            </div>
          </div>

          <div>
            <Button onClick={() => setStage('stage3')}>
              {formState.isValid ? 'siguiente' : 'complete los campos'}
            </Button>
          </div>
        </>
      )}

      {stage === 'stage3' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col mt-[200px]">
              <Input
                label="cuenta"
                error={formState.errors.account?.message.toString()}
                {...methods.register("account", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div>
            <Button onClick={() => handle_submit()}>
              {formState.isValid ? 'finalizar' : 'complete los campos'}
            </Button>
          </div>
        </>
      )}

    </>
  )
}


