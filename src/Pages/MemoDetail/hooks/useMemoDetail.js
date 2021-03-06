import { useEffect } from "react";
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { getMemoAsync } from '../../../modules/memo/memoReducer';

const useMemoDetail = () => {
  const { memo } = useSelector(state => state.memo);
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getMemoAsync(+id));
  }, [dispatch, id]);

  return { memo, id };
};

export default useMemoDetail;