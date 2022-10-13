import tw from "twin.macro";

export const Title: React.FC<{ children: any }> = ({ children }) => {
  return (
    <h1 tw="text-brand-800 font-semibold  mx-auto text-center leading-snug cursor-default p-4">
      Bienvenido,
      <br />
      <span tw="text-brand-800 font-semibold text-[42px]">
        {children}!
      </span>
    </h1>
  )
}

export const NoUserTitle: React.FC<{ children: any }> = ({ children }) => {
  return (
    <h1 tw="text-brand-800 mx-auto font-semibold text-center text-[26px] cursor-default p-4">
        {children}!
    </h1>
  )
}

export const UserSectionTitle: React.FC<{ children: any }> = ({ children }) => {
  return (
    <p tw="pt-[134px] font-medium text-brand-800 text-[20px] cursor-default">
        {children}
    </p>
  )
}