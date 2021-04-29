/* eslint-disable import/prefer-default-export */
// import { createAction } from '@/utils/redux';
import Art from '@/types/article';
import { Dispatch } from 'redux';
import { queryArticles } from '@/services/api';
import { SET_HOME_ARTICLES } from '../constants/home';

export const setHomeArticles = (list: Art.ArticleItem[]) => {
  return {
    type: SET_HOME_ARTICLES,
    list,
  };
};

// 异步的action
export function queryHomeArticles(params: Art.QueryParams = {}) {
  return async (dispatch: Dispatch) => {
    const { data } = await queryArticles(params);
    dispatch(setHomeArticles(data.rows));
  };
}

/**
 * 购物车信息
 * @param {*} payload
 */
// export const dispatchHome = (payload?: any) =>
//   createAction({ url: '/article/list', type: HOME_BANNER, payload });
