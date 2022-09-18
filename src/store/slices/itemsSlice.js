import { createSlice } from '@reduxjs/toolkit';

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

const itemsSlice = createSlice({
  name: 'items',
  state: initialState,
  reducers: {
    fetchItemsSuccess(state, action) {
      state.items = action.payload;
      state.filtered = action.payload;
    },
    filterItems(state, action) {
      state.filtered = state.items.filter(item => item.categories.some(action.payload));
    },
    fetchItemsError(state) {
      state.items = initialState.items;
    }
  }
});

const { actions, reducer } = itemsSlice;
export const {
  fetchItemsSuccess,
  filterItems,
  fetchItemsError
} = actions;

export default reducer;


