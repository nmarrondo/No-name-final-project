import GlobalStyles from "../styles/GlobalStyles"
import { Layout } from "../components/Layout"
import { cache } from "@emotion/css"
import { CacheProvider } from "@emotion/react"
import { AppProps } from "next/app"

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

export default MyApp
