import { createSlice } from '@reduxjs/toolkit';

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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd(state, action) {
      state.items.push(action.payload);
    },
    cartDelete(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    cartClear(state) {
      state.items = initialState.items;
    },
    cartUpdate(state, action) {
      state.items = action.payload.items;
    }
  }
});

const { actions, reducer } = cartSlice;

export const {
  cartAdd,
  cartDelete,
  cartClear,
  cartUpdate
} = actions;

export default reducer;
