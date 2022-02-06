import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initialState = {
  token: '',
  user: {},
};

export const authReducer = (state = initialState, action) => {
  const actions = {
    [LOGIN_SUCCESS]: () => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      return {
        ...state,
        ...action.payload,
      };
    },
    [LOGIN_ERROR | LOGOUT]: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return initialState;
    },
  };
  try {
    if (actions[action.type]) return actions[action.type]();
    else return initialState;
  } catch (e) {
    console.log(e);
  }
};
