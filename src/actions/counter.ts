import { Dispatch } from 'redux';
import { ADD, MINUS } from '../constants/counter';

export const add = () => {
  return {
    type: ADD,
  };
};
export const minus = () => {
  return {
    type: MINUS,
  };
};

// 异步的action
export function asyncAdd() {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}
