import { FETCH_ITEMS, FILTER_ITEMS } from '../actions/types';

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
  }, ],
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
    if (actions[action.type]) return actions[action.type]();
    else return initialState;
  } catch (e) {
    console.log(e);
  }
};
