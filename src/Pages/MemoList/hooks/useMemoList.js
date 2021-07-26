import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoListAsync, getAllTagsAsync } from '../../../modules/memoList/memoListReducer';
import { setMemo } from '../../../modules/memo/memoReducer';

const useMemoList = () => {
  const { memoList, allTags } = useSelector(state => state.memoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMemo(initialMemo));
    if (memoList.length === 0) dispatch(getMemoListAsync());
    if (allTags.length === 0) dispatch(getAllTagsAsync());
  }, [dispatch, memoList.length, allTags.length]);

  return { memoList, allTags };
};

const initialMemo = {
  id: 0,
  title: '',
  tags: [],
  text: '',
};

export default useMemoList;
