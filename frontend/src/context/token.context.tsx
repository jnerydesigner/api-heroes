import { createContext, useState, useContext, ReactNode } from "react";

interface TokenContextProps {
  tokenCtx: string | null;
  setTokenCtx: (token: string) => void;
}

const TokenContext = createContext<TokenContextProps | undefined>(undefined);

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const setTokenCtx = (token: string) => {
    setToken(token || "");
  };

  return (
    <TokenContext.Provider value={{ tokenCtx: token, setTokenCtx }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
