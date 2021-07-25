import {
  setMemo,
  getMemoAsync,
  addMemoAsync,
  updateMemoAsync,
  deleteMemoAsync,
  error,
  pending,
} from './memoReducer';
import { call, takeLatest, put } from 'redux-saga/effects';
import memoAPI from '../../api/memo';

export const selectMemo = state => state.memo.memo;

export function* getMemoSaga(action) {
  yield put(pending());
  const response = yield call(memoAPI.getMemo, action.payload);

  if (response.error) {
    yield put(error(response.error));
    return;
  }

  yield put(setMemo(response.data));
}

export function* addMemoSaga(action) {
  yield put(pending());
  const response = yield call(memoAPI.addMemo, action.payload);

  if(response.error) {
    yield put(error(response.error));
    return;
  }

  // yield put(setMemo(response.data));
}

export function* updateMemoSaga(action) {
  yield put(pending());
  const response = yield call(memoAPI.updateMemo, action.payload);

  if(response.error) {
    yield put(error(response.error));
    return;
  }

  // yield put(setMemo(response.data));
}

export function* deleteMemoSaga(action) {
  yield put(pending());
  const response = yield call(memoAPI.deleteMemo, action.payload);

  if(response.error) {
    yield put(error(response.error));
    return;
  }

  // yield put(setMemo(response.data));
}

export function* memoSaga() {
  yield takeLatest(getMemoAsync.type, getMemoSaga);
  yield takeLatest(addMemoAsync.type, addMemoSaga);
  yield takeLatest(updateMemoAsync.type, updateMemoSaga);
  yield takeLatest(deleteMemoAsync.type, deleteMemoSaga);
}
