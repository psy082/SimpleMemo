import * as S from './MemoEditor.styles';
import { useHistory } from 'react-router';
import { useMemoEditor } from './hooks';
import { TitleInput, BadgeBar, BadgeInput, TextInput } from './Components';
import { ActionButton } from '../../Common/Components';
import { checkSVG, returnSVG } from '../../assets/svg';

const MemoEditor = () => {
  const { mode, memo, addMemo, updateMemo, deleteMemo } = useMemoEditor();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const commit = () => {
    switch (mode) {
      case 'new':
        addMemo();
        history.push('/list');
        window.location.reload();
        break;
      case 'edit':
        updateMemo();
        history.push(`/memo/${memo.id}`);
        break;
      case 'delete':
        deleteMemo();
        history.push('/list');
        window.location.reload();
        break;
      default:
        break;
    }
  };

  return (
    <S.Container aria-disabled={'delete' === mode}>
      <S.Editor>
        <S.EditorBody>
          {!!('new' !== mode) && getRowComponent(memo, 'id', 'delete' === mode)}
          {rowNames.map(name => getRowComponent(memo, name, 'delete' === mode))}
        </S.EditorBody>
      </S.Editor>
      <S.FootWrapper>
        <ActionButton src={returnSVG} desc='return' onClick={goBack} />
        <ActionButton src={checkSVG} desc='commit' onClick={commit} />
      </S.FootWrapper>
    </S.Container>
  );
};

const getRowComponent = (memo, rowName, disabled) => {
  const componentTable = {
    id: memo.id,
    title: <TitleInput text={memo.title} disabled={disabled} />,
    tags: (
      <>
        {!disabled && <BadgeInput />}
        <BadgeBar tags={memo.tags} disabled={disabled} />
      </>
    ),
    text: <TextInput text={memo.text} disabled={disabled} />,
  };

  return (
    <S.EditorRow key={`Row${rowName}`}>
      <S.EditorHead>{rowName.toUpperCase()}</S.EditorHead>
      <S.EditorData>{componentTable[rowName]}</S.EditorData>
    </S.EditorRow>
  );
};

const rowNames = ['title', 'tags', 'text'];

export default MemoEditor;
