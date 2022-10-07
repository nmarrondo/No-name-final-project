import GlobalStyles from "../styles/GlobalStyles"
import { Layout } from "../components/Layout"
import { cache } from "@emotion/css"
import { CacheProvider } from "@emotion/react"
import { AppProps } from "next/app"
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <UserProvider>
      <CacheProvider value={cache}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </UserProvider>
  )
}

export default MyApp
