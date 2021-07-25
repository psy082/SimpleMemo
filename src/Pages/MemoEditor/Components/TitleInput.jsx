import { useDispatch } from 'react-redux';
import { setTitle } from '../../../modules/memo/memoReducer';
import * as S from './TitleInput.styles';

const TitleInput = ({ text, disabled }) => {
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    dispatch(setTitle(target.value));
  };

  return <S.Input value={text} onChange={handleInput} disabled={disabled} />;
};

export default TitleInput;
