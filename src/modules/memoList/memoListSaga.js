import {
  getMemoListAsync,
  getAllTagsAsync,
  error,
  resetError,
  pending,
} from './memoListReducer';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import memoAPI from '../../api/memo';

export const selectMemoList = state => state.memo.memoList;

export function* getMemoListSaga() {}

export function* getAllTagsSaga() {}

export function* memoSaga() {
  yield takeLatest(getMemoListAsync.type, getMemoListSaga);
  yield takeLatest(getAllTagsAsync.type, getMemoListSaga);
}
