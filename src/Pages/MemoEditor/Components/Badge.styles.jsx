import styled from '@emotion/styled';

export const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  padding: 0px 10px;
  font-size: 15px;
  line-height: 1.6em;
  border: 2px solid #70502667;
  border-radius: 20px;
`;

export const DeleteButton = styled.img`
  height: 7px;
  width: 7px;
  margin-left: 3px;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
