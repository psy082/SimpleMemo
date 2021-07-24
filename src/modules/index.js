import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import memoReducer from './memo/memoReducer';
import { memoSaga } from './memo/memoSaga';
import memoListReducer from './memoList/memoListReducer';
import { memoListSaga } from './memoList/memoListSaga';

const combineReducer = combineReducers({
  memoList: memoListReducer,
  memo: memoReducer,
});

export const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export function* rootSaga() {
  yield all([memoListSaga(), memoSaga()]);
}
