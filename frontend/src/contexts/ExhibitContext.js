import React, { createContext, useContext, useState } from "react";

const ExhibitContext = createContext(null);

export function ExhibitContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [survey, setSurvey] = useState({
    gender: "",
    age: new Date(),
    disease: [],
    stroke: [],
    familyStroke: [],
    smoking: [],
    drinking: [],
  });

  return (
    <ExhibitContext.Provider
      value={{
        user,
        setUser,
        survey,
        setSurvey,
      }}
      children={children}
    />
  );
}

export function useExhibitContext() {
  const exhibitContext = useContext(ExhibitContext);
  if (!exhibitContext) {
    throw new Error("ExhibitContext.Provider is not found");
  }
  return exhibitContext;
}
