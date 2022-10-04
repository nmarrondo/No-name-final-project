import tw from "twin.macro";

export const Input:React.FC<{
    name:string;
    label:string;
    placeholder:string;
    type:string;
    value?: string
    onChange?: (m: string) => void
  }> = ({
    name,
    label,
    placeholder,
    type, 
    value,
    onChange,
  }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input 
        tw="h-[36px] w-full bg-gray-200" 
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  )
}