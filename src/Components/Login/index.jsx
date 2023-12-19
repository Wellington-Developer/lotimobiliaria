import { Navigate, Route, Routes } from "react-router-dom"
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginReset } from "./LoginReset";
import { LoginLost } from "./LoginLost";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  if(login) return <Navigate to="/account" />

  return <div>
    <Routes>
      <Route path="/" element={ <LoginForm /> } />
      <Route path="create" element={ <LoginCreate /> } />
      <Route path="reset-password" element={ <LoginReset /> } />
      <Route path="lost-password" element={ <LoginLost /> } />
    </Routes>
  </div>
}

export default Login;