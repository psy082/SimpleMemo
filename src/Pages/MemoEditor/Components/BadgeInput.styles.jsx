import styled from '@emotion/styled';

export const Input = styled.input`
  border: none;
  background-color: #f5f5f5;
  border-bottom: 1px solid transparent;
  line-height: 1.5em;
  transition: border-bottom 0.2s;

  &:hover,
  &:focus {
    border-bottom: 1px solid #70502667;
  }
`;
