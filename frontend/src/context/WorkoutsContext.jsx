import { createContext, useReducer } from 'react';

// Reducer
import { 
  workoutsReducer,
  initialState
} from './reducers/workouts.reducer';

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(workoutsReducer, initialState);

  return (
    <WorkoutsContext.Provider value={{ state, dispatch }}>
      { children }
    </WorkoutsContext.Provider>
  )
}