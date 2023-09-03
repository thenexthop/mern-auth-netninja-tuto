import { useState } from "react";

// global context
import { useAuthContext } from './useAuthContext';

// action creators
import { loginUser } from '../context/actions/auth.actions';

export const useLoginUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { dispatch } = useAuthContext();

  async function login(email, password) {
    setIsLoading(true);
    setIsError(null);
    
    const res = await fetch("http://localhost:5400/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if(!res.ok) {
      setIsLoading(false);
      setIsError(json.errormsg);
    }

    if(res.ok) {
      // guarda el user en el localStorage  
      localStorage.setItem("user", JSON.stringify(json.data));

      // actualiza el contexto de Auth
      dispatch(loginUser(json.data));
      setIsLoading(false);
    }

  }// fin de loginUser()... 

  return { login, isLoading, isError };
}