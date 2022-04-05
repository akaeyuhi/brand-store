import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from './slices/authSlice';
import cartReducer  from './slices/cartSlice';
import itemsReducer from './slices/itemsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    allItems: itemsReducer
  },
  devTools: true
});
