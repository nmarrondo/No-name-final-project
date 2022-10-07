import tw from "twin.macro";
import React from "react"
import { Button } from "../../shared/Button";
import { useForm, Resolver } from 'react-hook-form';
import { useState } from "react";

export const SignUpProducerForm = () => {
  const [stage, setStage] = useState('stage1');

  const methods = useForm({defaultValues:{status:'producer',first_name:'',field2:'',field3:''}}) // poner los formularios en dos componentes diferentes(user/prucer, y asignarle un default value a cada uno)

  const handle_submit = methods.handleSubmit(async(data)=>{
    console.log("submit")
    console.log(data)
  })

  const { formState } = methods
  console.log(formState.errors)


  return(
    <div>
      { stage === 'stage1' && (
      <>
        <h2>Sign up form</h2>
        <div tw="flex flex-col gap-5">
          <div>
            <label htmlFor="name" />
            <input 
                tw="bg-gray-200" 
                name="name"
                type="text" 
                {...methods.register("first_name", {required:true})}
              />
          </div>
          <div>
            <label htmlFor="password" />
            <input 
                tw="bg-gray-200" 
                name="field2"
                type="text" 
                {...methods.register("field2", {required:true})}
              />
          </div>

          <div>
            <Button 
              onClick={() =>setStage('stage2')}
            >
              {formState.isValid?  'siguiente':'complete los campos'}
            </Button>
          </div>
        </div>
      </>
      )}

      { stage === 'stage2' && (
        <>
          <h2>Sign up form</h2>
          <div tw="flex flex-col gap-5">
            <div>
              <label htmlFor="other" />
              <input 
                  tw="bg-gray-200" 
                  name="field3"
                  type="text" 
                  {...methods.register("field3", {required:true})}
                />
            </div>

            <div>
              <Button 
                onClick={() => handle_submit()}
              >
                {formState.isValid?  'enviar':'complete los campos'}
              </Button>
            </div>
          </div>
        </>
      )}

    </div>
  )
}


