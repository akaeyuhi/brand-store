import { useHttp } from '../../../hooks/http.hook';
import { fetchItemsError, fetchItemsSuccess } from './actions';

const { authFetch } = useHttp();

export function fetchItems() {
  return async dispatch => {
    try {
      const result = await authFetch('/items');
      dispatch(fetchItemsSuccess(result.data));
    } catch (e) {
      dispatch(fetchItemsError(e));
    }
  };
}

