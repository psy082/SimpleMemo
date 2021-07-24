import * as S from './TagBadge.styles';

const TagBadge = ({ name, selected, onClick }) => {
  return (
    <S.BadgeComponent aria-selected={selected} onClick={onClick}>
      {name}
    </S.BadgeComponent>
  );
};

export default TagBadge;
