import { FETCH_ITEMS, FILTER_ITEMS, FETCH_ITEMS_ERROR } from './types';


export function filterItems(payload) {
  return {
    type: FILTER_ITEMS,
    payload,
  };
}

export function fetchItemsSuccess(payload) {
  return {
    type: FETCH_ITEMS,
    payload
  };
}

export function fetchItemsError(error) {
  return {
    type: FETCH_ITEMS_ERROR,
    payload: error
  };
}
