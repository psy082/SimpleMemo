import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memo : {
    id: 0,
    title: '',
    tags: [],
    text: ''
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
