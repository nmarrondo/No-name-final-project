import tw from "twin.macro";
import React from "react"
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { Input } from "../form_widgets/InputR";

export const SignUpClientForm = () => {
  const [stage, setStage] = useState('stage1');

  const methods = useForm({
    mode: "onChange",
    defaultValues:{status:'client',name:'',password:'',telephone:'',account:''}
  })

  const handle_submit = methods.handleSubmit(async(data)=>{
    console.log("submit")
    console.log(data)
  })  

  const { formState } = methods
  console.log(formState.errors)


  return(
    <>
      { stage === 'stage1' && (
      <div tw="flex flex-col justify-between">
        <div tw="flex flex-col gap-5">
          <Input 
            label="nombre"
            error={formState.errors.name?.message.toString()}
            {...methods.register("name",{
              required: true,
              minLength: { value:3, message: "Longitud mínima 3"},
            })}
          />
          <Input 
            label="contraseña"
            error={formState.errors.password?.message.toString()}
            {...methods.register("password",{
              required: true,
            })}
          />
        </div>
        <div>
          <Button onClick={() =>setStage('stage2')}>
            {formState.isValid?  'siguiente':'complete los campos'}
          </Button>
        </div>
      </div>
      )}

      { stage === 'stage2' && (
        <>
          <h2>Sign up form</h2>
          <div tw="flex flex-col gap-5">
          <Input 
            label="telefono"
            error={formState.errors.telephone?.message.toString()}
            {...methods.register("telephone",{
              required: true,
            })}
          />
            <div>
              <Button onClick={() =>setStage('stage3')}>
                {formState.isValid?  'enviar':'complete los campos'}
              </Button>
            </div>
          </div>
        </>
      )}



      { stage === 'stage3' && (
        <>
          <h2>Sign up form</h2>
          <div tw="flex flex-col gap-5">
          <Input 
            label="cuenta"
            error={formState.errors.account?.message.toString()}
            {...methods.register("account",{
              required: true,
            })}
          />
            <div>
              <Button onClick={() => handle_submit()}>
                {formState.isValid?  'enviar':'complete los campos'}
              </Button>
            </div>
          </div>
        </>
      )}

    </>
  )
}


