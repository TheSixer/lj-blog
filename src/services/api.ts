import qs from 'qs';
import * as Art from '@typing/article';
import request from './fetch';

export const queryArticles = (params?: Art.QueryParams): any =>
  request.get(`/article/list?${qs.stringify(params)}`);

export default {};
