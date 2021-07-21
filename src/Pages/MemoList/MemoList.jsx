import * as S from './MemoList.styles';
import { memoController } from '../../mockBack/Controller';

const MemoList = () => {
  (async () => {console.log(await memoController.add('oldMemo', ['old'], 'Hello folks'))})();
  return (
    <S.Container>
      <S.MemoList>MemoList</S.MemoList>
    </S.Container>
  );
};

export default MemoList;
