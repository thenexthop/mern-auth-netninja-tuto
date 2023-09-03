import actionTypes from "./action.types";

// Auth action creators

export function loginUser(userData){
  return {
    type: actionTypes.LOGIN,
    payload: userData
  }
}

export function logoutUser(){
  return {
    type: actionTypes.LOGIN,
    payload: null,
  }
}
