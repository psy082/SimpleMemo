import { useDispatch } from 'react-redux';
import { setTags } from '../../../modules/memo/memoReducer';
import * as S from './BadgeBar.styles';
import Badge from './Badge';

const BadgeBar = ({ tags, disabled }) => {
  const dispatch = useDispatch();

  const onDelete = tagName => {
    dispatch(setTags(tagName));
  };

  return (
    <S.Component>
      {tags.map(tagName => (
        <Badge key={`Badge${tagName}`} name={tagName} onDelete={() => onDelete(tagName)} disabled={disabled} />
      ))}
    </S.Component>
  );
};

export default BadgeBar;
