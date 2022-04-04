import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/authReducer';
import { cartReducer } from './reducers/cartReducer';
import { itemsReducer } from './reducers/itemsReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    allItems: itemsReducer
  }
});
