import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import React from "react";

const TokenContext = React.createContext<{ token?: string; loading: boolean }>({
  loading: false,
});

export const TokenLoader: React.FC<{ children: any }> = ({ children }) => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user && !token && !loading && isAuthenticated) {
      console.log("fetching token...");
      setLoading(true);
      getAccessTokenSilently({
        scope: "update:current_user_metadata read:current_user",
      })
        .then((token) => {
          setToken(token);
          console.log("we have a token");
          console.log(token);
        })
        .catch((e) => {
          console.error("Login before fetching a token");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, getAccessTokenSilently, token, user, isAuthenticated]);

  return (
    <TokenContext.Provider value={{ token, loading }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const data = useContext(TokenContext);
  return data;
};