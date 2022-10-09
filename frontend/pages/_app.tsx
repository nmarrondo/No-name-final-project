import GlobalStyles from "../styles/GlobalStyles"
import { Layout } from "../components/Layout"
import { cache } from "@emotion/css"
import { CacheProvider } from "@emotion/react"
import { AppProps } from "next/app"
import { UserProvider } from '@auth0/nextjs-auth0';
import { Auth0Provider} from '@auth0/auth0-react'
import { SWRConfig } from "swr"
import { fetcher } from "../lib/fetcher"


function MyApp({ Component, pageProps }:AppProps) {
  return (

      <UserProvider>
        <CacheProvider value={cache}>
          <SWRConfig value={{ fetcher}}>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWRConfig>
        </CacheProvider>
      </UserProvider>
  )
}

export default MyApp
