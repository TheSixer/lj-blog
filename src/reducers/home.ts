import { SET_HOME_ARTICLES } from '../constants/home';

const INITIAL_STATE = {
  list: [],
};

export default function home(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_HOME_ARTICLES: {
      return {
        ...state,
        list: state.list.concat(action.list),
      };
    }
    default:
      return state;
  }
}
