import { FILTER_ITEMS, LOGOUT } from './types';

export function login(payload) {
  return async dispatch => {
    dispatch(payload);
    // TODO: login logic
  };
}

export function fetchItems(payload) {
  return async dispatch => {
    dispatch(payload);
    //TODO: fetch items logic
  };
}

export function cartAdd(payload) {
  return async dispatch => {
    dispatch(payload);
    //TODO: cart add items logic
  };
}

export function cartDelete(payload) {
  return async dispatch => {
    dispatch(payload);
    //TODO: cart delete items logic
  };
}

export function cartUpdate(payload) {
  return async dispatch => {
    dispatch(payload);
    //TODO: cart update items logic
  };
}

export function cartClear(payload) {
  return async dispatch => {
    dispatch(payload);
    //TODO: cart clear logic
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function filterItems(payload) {
  return {
    type: FILTER_ITEMS,
    payload
  };
}

