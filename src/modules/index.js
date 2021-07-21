import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import memoReducer from './memo/memoReducer';
import { memoSaga } from './memo/memoSaga';

const combineReducer = combineReducers({
  memo: memoReducer,
});

export const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

export function* rootSaga() {
  yield all([memoSaga()]);
}
