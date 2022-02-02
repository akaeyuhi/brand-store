import {
  CART_ADD, CART_CLEAR,
  CART_DELETE,
  CART_UPDATE,
} from '../actions/types';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  const actions = {
    [CART_ADD]: () => state.items.concat([action.payload]),
    [CART_DELETE]: () => state.items.filter(item => item.id = action.payload.id),
    [CART_UPDATE]: () => '', // TODO
    [CART_CLEAR]: () => []
  };
  try {
    state = actions[action.type]();
    return state;
  } catch (e) {
    console.log(e);
  }

};
