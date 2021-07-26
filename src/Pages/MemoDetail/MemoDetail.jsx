import * as S from './MemoDetail.styles';
import { useHistory } from 'react-router';
import { useMemoDetail } from './hooks';
import { TagBadgeBar, ActionButton } from '../../Common/Components';

import { backSVG, editSVG, deleteSVG } from '../../assets/svg';

const memoContents = ['id', 'title', 'tags', 'text'];

const MemoDetail = () => {
  const { memo, id } = useMemoDetail();
  const history = useHistory();

  const toList = () => {
    history.push('/');
  };

  const editMemo = id => {
    history.push(`/edit/${id}`);
  };

  const deleteMemo = id => {
    history.push(`/delete/${id}`);
  };

  return (
    <S.Container>
      <S.HeadWrapper>
        <S.Backward src={backSVG} onClick={toList} />
      </S.HeadWrapper>
      <S.Memo>
        <S.MemoBody>
          {memoContents.map(contentName => (
            <S.MemoRow key={`row${contentName}`}>
              <S.MemoHead>{contentName.toUpperCase()}</S.MemoHead>
              <S.MemoData>
                {'tags' === contentName ? <TagBadgeBar tags={memo[contentName]} /> : memo[contentName]}
              </S.MemoData>
            </S.MemoRow>
          ))}
        </S.MemoBody>
      </S.Memo>
      <S.FootWrapper>
        <ActionButton src={editSVG} onClick={() => editMemo(id)} />
        <ActionButton src={deleteSVG} onClick={() => deleteMemo(id)} />
      </S.FootWrapper>
    </S.Container>
  );
};

export default MemoDetail;
