import tw from "twin.macro";
import React from "react";
import { useEffect, useState } from "react";


export const Input = React.forwardRef<
  HTMLInputElement,
    {
      name: string
      label: string
      value?: string
      onChange?: any
      onBlur?: any
      error?: string
    }
  >((props, ref) => {
  const { name, label, value, onChange, onBlur, error} = props
  return(
    <div tw="">
      <label htmlFor={name} tw=""></label>
      <input 
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        css={[
          tw`h-[36px] w-full bg-gray-200`,
          error && tw`bg-red-100`
        ]}
      />
      {error && <div tw="text-sm text-red-100">{error}</div>}
    </div>
  )
})

Input.displayName = "Input"