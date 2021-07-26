import * as S from './TagBadgeBar.styles';
import { useTags } from '../hooks';
import TagBadge from './TagBadge';

const TagBadgeBar = ({ tags }) => {
  const { selectedTags, onClick } = useTags();

  return (
    !!tags.length && (
      <S.BadgeBarComponent>
        {tags.map(tagName => (
          <TagBadge key={`All${tagName}`} name={tagName} selected={selectedTags.includes(tagName)} onClick={onClick} />
        ))}
      </S.BadgeBarComponent>
    )
  );
};

export default TagBadgeBar;
