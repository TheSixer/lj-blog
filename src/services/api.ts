import qs from 'qs';
import * as Art from '@/types/article';
import request from './fetch';

export const queryArticles = (params: Art.QueryParams) =>
  request.get(`/article/list?${qs.stringify(params)}`);

export default {};
