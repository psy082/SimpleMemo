import * as S from './MemoDetail.styles';
import { useHistory } from 'react-router';
import { useMemoDetail } from './hooks';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TagBadgeBar, ActionButton } from '../../Common/Components';

import { backSVG, editSVG, deleteSVG } from '../../assets/svg';

const rowNames = ['id', 'title', 'tags', 'text'];

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
        <S.MemoBody>{rowNames.map(rowName => getRowComponent(memo, rowName))}</S.MemoBody>
      </S.Memo>
      <S.FootWrapper>
        <ActionButton src={deleteSVG} onClick={() => deleteMemo(id)} />
        <ActionButton src={editSVG} onClick={() => editMemo(id)} />
      </S.FootWrapper>
    </S.Container>
  );
};

const getRowComponent = (memo, rowName) => {
  const componentTable = {
    id: memo.id,
    title: memo.title,
    tags: <TagBadgeBar tags={memo.tags} />,
    text: <CKEditor editor={ClassicEditor} data={memo.text} disabled='true' />,
  };

  return (
    <S.MemoRow key={`row${rowName}`}>
      <S.MemoHead>{rowName.toUpperCase()}</S.MemoHead>
      <S.MemoData>{componentTable[rowName]}</S.MemoData>
    </S.MemoRow>
  );
};

export default MemoDetail;
