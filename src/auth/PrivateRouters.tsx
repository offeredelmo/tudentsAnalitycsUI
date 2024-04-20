import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
    allowedRoles: string[];
    children?: React.ReactNode; // Esto permite que children sea opcional
  }


export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRoles}) => {

    const { state } = useContext(AuthContext); 

   
    const userHasRequiredRole = state.role && allowedRoles.includes(state.role);
  
    return userHasRequiredRole ? children : <Navigate to="/" replace />;
  };
  