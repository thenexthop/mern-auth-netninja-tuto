import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutsContext';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if(!context) {
    throw Error("Error al intentar usar el contexto.");  
  }

  return context;
}