import * as S from './MemoList.styles';
import { useMemoList } from './hooks';
import { TagBadgeBar } from '../../Common/Components';
import { MemoItem } from './Components';

import plusSVG from '../../assets/svg/plus.svg';

const tableHeads = [
  { name: 'ID', width: '8%' },
  { name: 'TITLE', width: '60%' },
  { name: 'TAGS', width: '32%' },
];

const MemoList = () => {
  const { memoList, allTags } = useMemoList();

  return (
    <S.Container>
      <S.AppTitle>Simple Memo</S.AppTitle>
      <S.ButtonWrapper to='/new'>
        <S.AddButton src={plusSVG} />
      </S.ButtonWrapper>
      <TagBadgeBar tags={allTags} />
      <S.MemoListTable>
        <S.MemoListHead>
          <S.MemoListHeadRow>
            {tableHeads.map(({ name, width }) => (
              <th key={`head${name}`} width={width}>
                {name}
              </th>
            ))}
          </S.MemoListHeadRow>
        </S.MemoListHead>
        <S.MemoListBody>
          {memoList.map(({ id, title, tags }) => (
            <MemoItem key={`Item${id}`} id={id} title={title} tags={tags} />
          ))}
        </S.MemoListBody>
      </S.MemoListTable>
    </S.Container>
  );
};

export default MemoList;
