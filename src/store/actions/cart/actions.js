import { CART_ADD, CART_ERROR } from './types';

export function cartAddSuccess(payload) {
  return {
    type: CART_ADD,
    payload,
  };
}

export function cartError(payload) {
  return {
    type: CART_ERROR,
    payload
  };
}
