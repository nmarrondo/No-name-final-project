import tw from "twin.macro";
import { BiSearch } from "react-icons/bi";


export const Searcher = () => {
  return (
    <div tw="relative">
      <input
        name="searcher"
        className="peer"
        tw="h-[32px] w-[190px] pl-9 rounded-full bg-brand-100 placeholder:text-brand-300 text-dark-800 focus:outline-none" />
      <label
        htmlFor="searcher"
        tw="absolute left-3 top-[9px] text-brand-600 transition-all peer-focus:text-brand-300"><BiSearch /></label>
    </div>
  )
}