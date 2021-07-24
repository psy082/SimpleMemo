import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const AppTitle = styled.h1`
  margin: 40px 0;
  text-align: center;
  color: rgba(158, 111, 111, 0.582);
  font-weight: 200;
`;

export const ButtonWrapper = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const AddButton = styled.img`
  margin-bottom: 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export const MemoListTable = styled.table`
  width: 50vw;
  margin: 40px 0;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const MemoListHead = styled.thead``;

export const MemoListHeadRow = styled.tr`
  padding: 16px 16px 16px 60px;
  border: none;
  line-height: 1.4em;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  font-size: 24px;
`;

export const MemoListBody = styled.thead``;
