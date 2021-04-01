/* eslint-disable import/prefer-default-export */
import { createAction } from 'utils/redux';
import { ARTICLE_LIST } from '../constants/article';

/**
 * 文章列表
 * @param {*} callback
 */
export const dispatchArticle = (callback?: any) =>
  createAction({ url: '/article/list', type: ARTICLE_LIST, callback });
