import {  LOGOUT } from './types';

export function login(payload) {
  return async dispatch => {
    dispatch(payload);
    // TODO: login logic
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

