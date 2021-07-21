import qs from 'query-string';
import { memoService } from './Service';

const PARAM_NAME = {
  SEARCH: 'search',
  TAG: 'tag',
};

export const memoController = {
  getList: param => {
    const queryParams = qs.parse(param, { arrayFormat: 'comma' });
    const searchKeyword = queryParams[PARAM_NAME.SEARCH];
    const tagKeywords =
      typeof queryParams[PARAM_NAME.TAG] === 'string' ? [queryParams[PARAM_NAME.TAG]] : queryParams[PARAM_NAME.TAG];
    return memoService.getMemoList(searchKeyword, tagKeywords);
  },

  get: id => memoService.getMemo(id),

  add: (title, tags, text) => memoService.addMemo(title, tags, text),

  update: (id, title, tags, text) => memoService.updateMemo(id, title, tags, text),

  delete: id => memoService.deleteMemo(id)
};
