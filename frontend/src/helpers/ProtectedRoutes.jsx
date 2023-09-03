import { Navigate, Outlet } from "react-router-dom";

// custom hooks (Auth)
import { useAuthContext } from "../hooks/useAuthContext";

export default function ProtectedRoutes() {
  const {state:{user}} = useAuthContext();
  return user ? <Outlet /> : <Navigate to="login"/>;
}
