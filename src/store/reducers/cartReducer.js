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
    [CART_ADD]: () => ({
      items: state.items.concat([action.payload])
    }),
    [CART_DELETE]: () => ({
      items: state.items.filter(item => item.id = action.payload.id),
    }),
    [CART_UPDATE]: () => '', // TODO
    [CART_CLEAR]: () => initialState
  };
  try {
    if (actions[action.type]) return actions[action.type]();
    else return initialState;
  } catch (e) {
    console.log(e);
  }

};
