import tw from "twin.macro";
import React from "react"
import { Button } from "../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";
import { SignUpClientForm } from "./SingUpForms/SignUpClientForm";
import { SignUpProducerForm } from "./SingUpForms/SignUpProducerForm";
import { RegisterPbyWeightForm } from "./RegisterProductForms/RegisterPbyWeightForm";
import { RegisterPbyUnitForm } from "./RegisterProductForms/RegisterPbyUnitForm";
import { ButtonLink } from "../shared/ButtonLink";

export const RegisterProductForm = () => {
  const [stage, setStage] = useState('none');

  return(
    <>
      { stage === 'none' && (
        <div tw="h-[75%] flex flex-col">
          <div tw="flex flex-col gap-4 mt-[180px]">
            <Button onClick={() => setStage('weight')}>Subir un producto al peso</Button>
            <Button onClick={() => setStage('unit')}>subir un producto por unidad</Button>
            <ButtonLink href="/productor_products">Ver mis Productos</ButtonLink>
          </div>
        </div>
      )}


      { stage === 'weight' && (<RegisterPbyWeightForm />)}

      { stage === 'unit' && (<RegisterPbyUnitForm />)}
    </>
    
  )
}