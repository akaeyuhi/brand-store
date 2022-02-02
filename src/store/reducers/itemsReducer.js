import { FETCH_ITEMS, FILTER_ITEMS } from '../actions/types';

const initialState = {
  items: [{}],
  filters: {}
};

export const itemsReducer = (state = initialState, action) => {
  const actions = {
    [FETCH_ITEMS]: () => [...action.payload],
    [FILTER_ITEMS]: () => state.items.filter(item => item === state.filter) // TODO
  };
  try {
    state = actions[action.type]();
    return state;
  } catch (e) {
    console.log(e);
  }
};
