import tw from "twin.macro";


export const ReturnButton = () => {
    const goBack= () => window.history.back()
  return(
    <button tw="h-[36px] w-[36px] bg-gray-200 hover:bg-gray-300" onClick={goBack}>B</button>
  )
}