import { setMemoList, setAllTags, getMemoListAsync, getAllTagsAsync, pending } from './memoListReducer';
import { call, takeLatest, put } from 'redux-saga/effects';
import memoAPI from '../../api/memo';

export const selectMemoList = state => state.memoList.memoList;

export function* getMemoListSaga() {
  yield put(pending());

  const response = yield call(memoAPI.getMemoList);
  yield put(setMemoList(response.data));
}

export function* getAllTagsSaga() {
  yield put(pending());

  const response = yield call(memoAPI.getAllTags);
  
  yield put(setAllTags(response.data));
}

export function* memoListSaga() {
  yield takeLatest(getMemoListAsync.type, getMemoListSaga);
  yield takeLatest(getAllTagsAsync.type, getAllTagsSaga);
}
