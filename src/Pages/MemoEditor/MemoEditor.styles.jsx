import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 60px;

  &[aria-disabled='true'] {
    text-decoration-line: line-through;
  }
`;

export const Editor = styled.table`
  width: 50vw;
  margin: 10px 0;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const EditorBody = styled.tbody``;

export const EditorRow = styled.tr`
  line-height: 1.4em;
`;

export const EditorHead = styled.th`
  width: 20%;
`;

export const EditorData = styled.td`
  display: flex;
  width: 80%;
`;

export const EditorInput = styled.td`
  width: 80%;
`;

export const FootWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
