import tw from "twin.macro";
import React from "react"
import { Button } from "../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { SignUpClientForm } from "./SingUpForms/SignUpClientForm";
import { SignUpProducerForm } from "./SingUpForms/SignUpProducerForm";

export const SignUpUserForm = () => {
  const [stage, setStage] = useState('none');

  const methods = useForm()

  const [name, setName] = useState("")


  const { formState } = methods
  console.log(formState.errors)


  return(
    <div tw="h-full">
      { stage === 'none' && (
        <>
          <div tw="flex flex-col gap-4 mt-[20px]">
            <Button onClick={() => setStage('client')}>Quiero comprar</Button>
            <Button onClick={() => setStage('producer')}>Quiero vender</Button>
          </div>
        </>
      )}


      { stage === 'client' && (<SignUpClientForm />)}

      { stage === 'producer' && (<SignUpProducerForm />)}

    </div>
  )
}


