import React, { createContext, useContext, useState } from "react";

const GalleristContext = createContext(null);

export function GalleristContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <GalleristContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
      }}
      children={children}
    />
  );
}

export function useGalleristContext() {
  const galleristContext = useContext(GalleristContext);
  if (!galleristContext) {
    throw new Error("ExhibitContext.Provider is not found");
  }
  return galleristContext;
}
