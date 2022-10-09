import tw from "twin.macro";
import React from "react"
import { Button } from "../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { SignUpClientForm } from "./SingUpForms/SignUpClientForm";
import { SignUpProducerForm } from "./SingUpForms/SignUpProducerForm";

export const SignUpUserForm = () => {
  const [stage, setStage] = useState('none');

  return(
    <>
      { stage === 'none' && (
        <div tw="h-[75%] flex flex-col">
          <div tw="flex flex-col gap-4 mt-[180px]">
            <Button onClick={() => setStage('client')}>Quiero comprar</Button>
            <Button onClick={() => setStage('producer')}>Quiero vender</Button>
          </div>
        </div>
      )}


      { stage === 'client' && (<SignUpClientForm />)}

      { stage === 'producer' && (<SignUpProducerForm />)}
    </>
    
  )
}


