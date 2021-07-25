import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTags } from '../../../modules/memo/memoReducer';
import * as S from './BadgeInput.styles';

const BadgeInput = ({ disabled }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const onChange = event => {
    setInput(event.target.value);
  };

  const onKeyDown = event => {
    if (event.key === ';') {
      dispatch(setTags(input.substring(0, input.length - 1)));
      setInput('');
    }
  };

  return <S.Input value={input} onChange={onChange} onKeyUp={onKeyDown} disabled={disabled} />;
};

export default BadgeInput;
