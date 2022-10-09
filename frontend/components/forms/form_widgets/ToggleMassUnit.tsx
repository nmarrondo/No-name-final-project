import { useState } from "react"
import tw from "twin.macro"

export const ToggleMassUnit:React.FC<{
  onClick?: () => void
}> = ({
  onClick,
}) => {
  const [mass, setMass] = useState('kg')
  
  return(
    <>
    { mass === 'kg' &&  
    <button 
      tw="bg-gray-200 h-[36px] w-[36px]"
      onClick={() => setMass('g')}
    >{mass}/€</button>
    }
    { mass === 'g' &&  
    <button 
      tw="bg-gray-200 h-[36px] w-[36px]"
      onClick={() => setMass('kg')}
    >{mass}/€</button>
    }
    </>
  )
}