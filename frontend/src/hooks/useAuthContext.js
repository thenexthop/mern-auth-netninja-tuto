import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if(!context) {
    throw Error("Error al intentar usar el contexto de Auth.");  
  }

  return context;
}