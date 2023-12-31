import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}) => {
  const { login } = useContext(UserContext);
  return login ? children : <Navigate to="/login" />
}