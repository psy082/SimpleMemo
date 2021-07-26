import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMemo,
  getMemoAsync,
  addMemoAsync,
  updateMemoAsync,
  deleteMemoAsync,
} from '../../../modules/memo/memoReducer';

const useMemoEditor = () => {
  const { memo } = useSelector(state => state.memo);
  const location = useLocation();
  const [, mode, id] = location.pathname.split('/');
  const dispatch = useDispatch();

  useEffect(() => {
    if ('new' === mode) {
      dispatch(setMemo(initialMemo));
    } else {
      dispatch(getMemoAsync(+id));
    }
  }, [dispatch, mode, id]);

  const addMemo = () => {
    dispatch(addMemoAsync(memo));
  };

  const updateMemo = () => {
    dispatch(updateMemoAsync(memo));
  };

  const deleteMemo = () => {
    dispatch(deleteMemoAsync(memo.id));
  };

  return { mode, memo, addMemo, updateMemo, deleteMemo };
};

const initialMemo = {
  id: 0,
  title: '',
  tags: [],
  text: '',
};

export default useMemoEditor;
