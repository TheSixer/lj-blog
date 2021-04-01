import { ARTICLE_LIST } from '../constants/article';

const INITIAL_STATE = {
  articleList: [],
};

export default function article(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ARTICLE_LIST: {
      return {
        ...state,
        articleList: action.payload.articleList,
      };
    }
    default:
      return state;
  }
}
