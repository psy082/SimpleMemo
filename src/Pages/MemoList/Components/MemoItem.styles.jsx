import styled from '@emotion/styled';

export const MemoItemComponent = styled.tr`
  padding: 16px 16px 16px 60px;
  border: none;
  line-height: 1.4em;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  font-size: 25px;
`;

export const MemoItemId = styled.th``;

export const MemoItemTitle = styled.th`
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const MemoItemTagsWrapper = styled.th``;
