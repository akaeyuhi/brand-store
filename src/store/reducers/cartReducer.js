import {
  CART_ADD, CART_CLEAR,
  CART_DELETE,
  CART_UPDATE,
} from '../actions/types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [{
    id: 1,
    name: 'Test',
    rating: 5,
    price: 100,
  },
  {
    id: 2,
    name: 'Test',
    rating: 5,
    price: 100,
  },
  {
    id: 3,
    name: 'Test',
    rating: 5,
    price: 100,
  },
  ],
};

export const cartReducer = createReducer(initialState, (builder => {
  builder
    .addCase(CART_ADD, (state, action) =>
      state.items.push(action.payload)
    )
    .addCase(CART_DELETE, (state, action) =>
      state.items.filter(item => item.id = action.payload.id)
    )
    .addCase(CART_CLEAR, state => {
      state.items = initialState.items;
    })
    .addCase(CART_UPDATE, (state, action) => {
      state.items = action.payload.items;
    });
}));

