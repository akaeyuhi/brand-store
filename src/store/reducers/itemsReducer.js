import { FETCH_ITEMS, FILTER_ITEMS } from '../actions/types';

const initialState = {
  items: [{}],
  filters: {},
  filtered: [],
};

export const itemsReducer = (state = initialState, action) => {
  const actions = {
    [FETCH_ITEMS]: () => ({
      ...state, items: [...action.payload],
    }),
    [FILTER_ITEMS]: () => ({
      ...state,
      filtered: state.items.filter(item => item === state.filter),
    }), // TODO
  };
  try {
    if (actions[action.type]) return actions[action.type]();
    else return initialState;
  } catch (e) {
    console.log(e);
  }
};
