import tw from "twin.macro";
import React from "react"
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { Input } from "../form_widgets/Input";
import { useUserHook } from "../../../hooks/useUser";
import { useRouter } from "next/router";
import { FormText } from "../../shared/text";
import { TextArea } from "../form_widgets/TextArea";

export const SignUpProducerForm = () => {
  const [stage, setStage] = useState('stage1');

  const methods = useForm({
    mode: "onChange",
    defaultValues: { role: 'producer', name: '', telephone: '', ca: '', REGEPA: '', DNI: '', description: '' }
  })

  const { create_user } = useUserHook()

  const { formState } = methods

  const router = useRouter()

  const handle_submit = methods.handleSubmit(async (data) => {
    await create_user(data)
    router.push("/")
  })

  return (
    <>
      {stage === 'stage1' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col gap-4 mt-[140px]">
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
              <TextArea
                label="Descripción"
                error={formState.errors.description?.message.toString()}
                {...methods.register("description", {
                  required: true,
                  minLength: { value: 3, message: "" },
                  maxLength: { value: 90, message: "90 caracteres máximo" },
                })}
              />
            </div>
          </div>
          <div>
            <Button
              disabled={!formState.isValid}
              onClick={() => setStage('stage2')}>
              {formState.isValid ? 'siguiente' : 'complete los campos'}
            </Button>
          </div>
        </>
      )}


      {stage === 'stage2' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col gap-4 mt-[180px]">
              <div tw="mb-6">
                <FormText>Por favor indicanos tu Comunidad Autónoma para continuar, de acuerdo a la ley Ley 7/1996.</FormText>
              </div>
              <Input
                label="Comunidad Autonoma"
                error={formState.errors.ca?.message.toString()}
                {...methods.register("ca", {
                  minLength: { value: 6, message: "Introduza un nombre válido" },
                  required: true,
                })}
              />
            </div>
          </div>
          <div>
            <Button
              disabled={!formState.isValid}
              onClick={() => setStage('stage3')}>
              {formState.isValid ? 'siguiente' : 'complete los campos'}
            </Button>
          </div>
        </>
      )}

      {stage === 'stage3' && (
        <>
          <div tw="h-[75%]">
            <div tw="flex flex-col gap-4 mt-[180px]">
              <Input
                label="REGEPA"
                error={formState.errors.REGEPA?.message.toString()}
                {...methods.register("REGEPA", {
                  required: true,
                  pattern: { value: /[A-Z]{6,9}[1-9]{4}/, message: "Registro de la Producción Agrícola" },
                })}
              />
              <Input
                label="DNI"
                error={formState.errors.DNI?.message.toString()}
                {...methods.register("DNI", {
                  required: true,
                  pattern: { value: /^[XYZ]?\d{5,8}[A-Z]$/, message: "DNI no válido" },
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


