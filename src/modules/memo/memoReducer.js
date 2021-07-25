import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memo: {
    id: 0,
    title: '',
    tags: [],
    text: '',
  },
  error: '',
};

export const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    setMemo: (state, action) => {
      state.memo = action.payload;
    },
    setTitle: (state, action) => {
      state.memo = Object.assign({}, state.memo, { title: action.payload });
    },
    setTags: (state, action) => {
      let tags = [...state.memo.tags];
      let idx = -1;
      if((idx = tags.indexOf(action.payload)) > -1) {
        tags.splice(idx, 1);
      } else {
        tags.push(action.payload);
        tags = tags.sort();
      }
      state.memo = Object.assign({}, state.memo, { tags });
    },
    setText: (state, action) => {
      state.memo = Object.assign({}, state.memo, { text: action.payload });
    },
    getMemoAsync: (state, action) => {},
    addMemoAsync: (state, action) => {},
    updateMemoAsync: (state, action) => {},
    deleteMemoAsync: (state, action) => {},
    error: (state, action) => {
      state.error = action.payload;
    },
    resetError: state => {
      state.error = '';
    },
    pending: state => {
      state.error = '';
    },
  },
});

export const {
  setMemo,
  setTitle,
  setTags,
  setText,
  getMemoListAsync,
  getMemoAsync,
  addMemoAsync,
  updateMemoAsync,
  deleteMemoAsync,
  error,
  resetError,
  pending,
} = memoSlice.actions;

export default memoSlice.reducer;
