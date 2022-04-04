import { FETCH_ITEMS, FILTER_ITEMS } from '../actions/types';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [{
    id: 1,
    name: 'Test',
    rating: 5,
    price: 100,
    categories: []
  },
  {
    id: 2,
    name: 'Test',
    rating: 5,
    price: 100,
    categories: []
  },
  {
    id: 3,
    name: 'Test',
    rating: 5,
    price: 100,
    categories: []
  }, ],
  filtered: []
};

export const itemsReducer = createReducer(initialState, builder => {
  builder
    .addCase(FETCH_ITEMS, (state, action) => {
      state.items = action.payload;
      state.filtered = action.payload;
    })
    .addCase(FILTER_ITEMS, (state, action) => {
      state.filtered = state.items.filter(item => item.categories.some(action.payload));
    })
    .addCase('FETCH_ERROR', state => {
      state.items = initialState.items;
    });
});

