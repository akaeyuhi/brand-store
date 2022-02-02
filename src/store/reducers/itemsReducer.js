import { FETCH_ITEMS, FILTER_ITEMS } from '../actions/types';

const initialState = {
  items: [{}],
  filters: {},
  filtered: []
};

export const itemsReducer = (state = initialState, action) => {
  const actions = {
    [FETCH_ITEMS]: () => ({
      ...state, items: [...action.payload]
    }),
    [FILTER_ITEMS]: () => ({
      ...state,
      filtered: state.items.filter(item => item === state.filter)
    }) // TODO
  };
  try {
    return actions[action.type]();
  } catch (e) {
    console.log(e);
  }
};
