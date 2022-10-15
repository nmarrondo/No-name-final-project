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
    error?: string
    type?: string
  }
>((props, ref) => {
  const { name, label, value, onChange, error, type = "text" } = props

  return (
    <div tw="relative">
      <input
        type={type}
        ref={ref}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        className='peer'
        css={[
          tw`z-10 h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-brand-600`,
          error && tw`border-brand-600`
        ]}
      />
      <label
        htmlFor={name}
        tw="z-0 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >{label}</label>
      {!error && <div tw="h-5"></div>}
      {error && <div tw="h-5 text-sm text-brand-600">{error}</div>}
    </div >
  )
})

Input.displayName = "Input"