import tw from "twin.macro";
import { IoChevronBackSharp } from "react-icons/io5";


export const ReturnButton = () => {
    const goBack= () => window.history.back()
  return(
    <button tw="ml-[-10px]" onClick={goBack}>
      <IoChevronBackSharp 
        tw="h-[36px] w-[36px] text-brand-300 hover:text-brand-400"
        style={{
          WebkitTransition: 'all 300ms',
          transition: 'all 300ms', 
        }}
      />
    </button>
  )
}