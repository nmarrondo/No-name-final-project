import tw from "twin.macro";
import React from "react"
import { Button } from "../shared/Button";
import { useState } from "react";
import { SignUpClientForm } from "./SingUpForms/SignUpClientForm";
import { SignUpProducerForm } from "./SingUpForms/SignUpProducerForm";

export const SignUpUserForm = () => {
  const [stage, setStage] = useState('none');

  return (
    <>
      {stage === 'none' && (
        <div tw="h-full flex items-center">
          <div tw="flex w-full flex-col gap-4">
            <Button onClick={() => setStage('client')}>Quiero comprar</Button>
            <Button onClick={() => setStage('producer')}>Quiero vender</Button>
          </div>
        </div>
      )}

      {stage === 'client' && (<SignUpClientForm />)}

      {stage === 'producer' && (<SignUpProducerForm />)}
    </>

  )
}


