import { createContext, useContext } from "react";
import { AuthContextType } from "./AuthProvider";

const defaultValue: AuthContextType = {
    state: {
      logged: false,
      name: null,
      role: null,
      id: null,
      token: null
    },
    login: () => {}, // Funciones vacías como placeholders
    logout: () => {},
  };

export const AuthContext =  createContext<AuthContextType>(defaultValue)