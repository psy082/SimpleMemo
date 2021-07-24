import * as S from './MemoItem.styles';
import { useHistory } from 'react-router-dom';
import TagBadgeBar from './TagBadgeBar';

const MemoItem = ({ id, title, tags }) => {
  const history = useHistory();

  const handleRowClick = id => {
    history.push(`/memo/${id}`);
  };

  return (
    <S.MemoItemComponent>
      <S.MemoItemId>{id}</S.MemoItemId>
      <S.MemoItemTitle onClick={() => handleRowClick(id)}>{title}</S.MemoItemTitle>
      <S.MemoItemTagsWrapper>
        <TagBadgeBar tags={tags} />
      </S.MemoItemTagsWrapper>
    </S.MemoItemComponent>
  );
};

export default MemoItem;
