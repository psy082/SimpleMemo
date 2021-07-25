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
        break;
      case 'edit':
        updateMemo();
        break;
      case 'delete':
        deleteMemo();
        break;
      default:
        break;
    }
    history.push('/');
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
        <ActionButton src={returnSVG} onClick={goBack} />
        <ActionButton src={checkSVG} onClick={commit} />
      </S.FootWrapper>
    </S.Container>
  );
};

const getRowComponent = (memo, rowName, disabled) => {
  console.log(memo);
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
