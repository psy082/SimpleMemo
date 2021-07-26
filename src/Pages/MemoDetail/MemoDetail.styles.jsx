import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 60px;
`;

export const HeadWrapper = styled.div``;

export const Backward = styled.img`
  height: 18px;
  width: 18px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;

export const Memo = styled.table`
  width: 50vw;
  margin: 10px 0;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const MemoBody = styled.tbody``;

export const MemoRow = styled.tr`
  line-height: 1.4em;
`;

export const MemoHead = styled.th`
  width: 20%;
  border-right: 2px solid #70502667;
`;

export const MemoData = styled.td`
  width: 80%;
`;

export const Text = styled.div`
  padding: 0 9px;
`;

export const FootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
