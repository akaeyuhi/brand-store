import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actions/types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {}
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(LOGIN_SUCCESS, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(LOGIN_ERROR, (_, action) => {
      logout();
      console.error(action.payload);
    })
    .addCase(LOGOUT, () => logout());
});

