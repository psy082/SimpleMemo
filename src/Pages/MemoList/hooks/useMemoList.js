import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemoListAsync, getAllTagsAsync } from '../../../modules/memoList/memoListReducer';
import { setMemo } from '../../../modules/memo/memoReducer';

const useMemoList = () => {
  const { memoList, allTags } = useSelector(state => state.memoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((memoList.length !== 0) && (allTags.length !== 0)) return;
    dispatch(getMemoListAsync());
    dispatch(getAllTagsAsync());
    dispatch(setMemo(initialMemo));
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
