// global contexts
import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

// action creators
import { logoutUser } from "../context/actions/auth.actions";
import { setAllWorkouts } from "../context/actions/workouts.actions";

export function useLogoutUser() {
  const { dispatch } = useAuthContext();
  const { dispatch:dispatchWorkouts } = useWorkoutsContext();

  const logout = () => {
    // elimina el usuario del local storage 
    localStorage.removeItem("user");

    // actualiza los estados globales
    dispatch(logoutUser());
    dispatchWorkouts(setAllWorkouts(null));
  }

  return { logout };
}
