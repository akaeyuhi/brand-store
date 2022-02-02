import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {
  token: '',
  user: {}
};

export const authReducer = (state = initialState, action) => {
  const actions = {
    [LOGIN_SUCCESS]: () => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...action.payload
      };
    },
    [LOGIN_ERROR | LOGOUT]: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {};
    }
  };
  try {
    state = actions[action.type]();
  } catch (e) {
    console.log(e);
  }
  return state;
};