import { useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/http.hook';
import { cartError, cartAddSuccess } from './actions';


export function cartAdd(payload) {
  return async dispatch => {
    const token = useSelector(state => state.user.token);

    const { authFetch } = useHttp(token);

    try {
      const result = await authFetch(`/cartAdd/${payload.id}`, 'POST');
      dispatch(cartAddSuccess({ ...result.data, payload }));
    } catch (e) {
      dispatch(cartError(e));
    }
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
