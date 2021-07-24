import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  memoList: [],
  allTags: [],
  error: '',
};

export const memoListSlice = createSlice({
  name: 'memoList',
  initialState,
  reducers: {
    getMemoListAsync: () => {},
    getAllTagsAsync: () => {},
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
  getMemoListAsync,
  getAllTagsAsync,
  error,
  resetError,
  pending,
} = memoListSlice.actions;

export default memoListSlice.reducer;