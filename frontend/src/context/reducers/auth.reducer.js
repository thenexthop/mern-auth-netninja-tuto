import actionTypes from "../actions/action.types"

export const initialState = {
  user: null,
}

export function authReducer(state, action) {
  switch(action.type) {
    case (actionTypes.LOGIN):
      return {
        ...state,
        user: action.payload,
      };
    case (actionTypes.LOGOUT):
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  }
}