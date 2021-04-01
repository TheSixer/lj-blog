/* eslint-disable import/prefer-default-export */
import { createAction } from 'utils/redux';
import { HOME_BANNER } from '../constants/home';

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchHome = (payload?: any) =>
  createAction({ url: '/article/list', type: HOME_BANNER, payload });
