import GlobalStyles from "../styles/GlobalStyles"
import { Layout } from "../components/Layout"
import { cache } from "@emotion/css"
import { CacheProvider } from "@emotion/react"
import { AppProps } from "next/app"
import { UserProvider } from '@auth0/nextjs-auth0';
import { Auth0Provider, useAuth0} from '@auth0/auth0-react'
import { SWRConfig } from "swr"
import { fetcher } from "../lib/fetcher"
import { TokenLoader } from "../lib/TokenLoader"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react"


const SessionLoading = ({ children }) => {
  const { isLoading } = useAuth0();
  return (
    <TokenLoader>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 1 }}
            tw=""
          >
            <div>Bienvenido!</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </TokenLoader>
  );
};


function MyApp({ Component, pageProps }:AppProps) {
  let redirectUri = "";
  if (typeof window !== "undefined") {
    redirectUri = window.location.origin;
  }
  return (



    <Auth0Provider
    domain="https://the-good-shop-app.eu.auth0.com"
    clientId="pWwMbm9N4KX5tQZStkRDOtsD6rOHO8xP"
    redirectUri={redirectUri}
    scope="update:current_user_metadata read:current_user"
    audience="https://the-good-shop-app.eu.auth0.com/api/v2/"
  >
      <UserProvider>
        <CacheProvider value={ cache }>
          <SWRConfig value={{ fetcher }}>
            <GlobalStyles />
            <SessionLoading>

            <Layout>
                <Component {...pageProps} />
            </Layout>
            </SessionLoading>

          </SWRConfig>
        </CacheProvider>
      </UserProvider>
      </Auth0Provider>
  )
}

export default MyApp
