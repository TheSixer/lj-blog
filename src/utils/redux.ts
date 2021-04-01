/**
 * 适当封装 Redux，简化调用
 */
import fetch from '../services/fetch';

export function createAction(options: any) {
  const { url, payload, method, cb, type } = options;
  return async (dispatch: any) => {
    const res = await fetch.request(url, payload, method);
    dispatch({ type, payload: cb ? cb(res) : res });
    return res;
  };
}

export default {};
