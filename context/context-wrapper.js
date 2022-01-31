import React, { createContext, useState, useEffect } from "react";
import { useInterpret } from "@xstate/react";
import { authMachine } from "./states/authentication-state";

export const AuthenticationContext = createContext({});

export const ContextWrapper = ({ children }) => {
  // Services
  const authService = useInterpret(authMachine);

  /*

  This component will hold all global variables and state machines

  This way we can use information globally about the user, device, auth status etc.


  */

  return (
    <AuthenticationContext.Provider value={{ authService }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
