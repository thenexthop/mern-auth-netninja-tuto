import { 
  createContext, 
  useReducer,
  useEffect
} from "react";

// reducer + initial state
import { 
  authReducer,
  initialState
} from './reducers/auth.reducer';

// action creators
import { loginUser } from "./actions/auth.actions";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(user) {
      dispatch(loginUser(user));
    }

  }, []);

  // Ojo ------------ TEMPORAL SOLO PARA TRACKEAR
  console.log("Auth context: ", state);

  return (
    <AuthContext.Provider value={{state, dispatch}} >
      {children}
    </AuthContext.Provider>
  );
}
