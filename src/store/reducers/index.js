import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
    user: authReducer,
  },
);
