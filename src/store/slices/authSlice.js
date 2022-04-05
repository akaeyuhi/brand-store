import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  loading: false,
  user: {}
};

const storageLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginError(state, action) {
      storageLogout();
      console.error(action.payload);
    },
    authLoading(state) {
      state.loading = !state.loading;
    },
    logout() {
      storageLogout();
    }
  }
});

const { actions, reducer } = authSlice;

export const {
  loginSuccess,
  loginError,
  logout,
  authLoading,
} = actions;

export default reducer;


