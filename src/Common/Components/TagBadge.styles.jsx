import styled from '@emotion/styled';

export const BadgeComponent = styled.li`
  margin: 0 2px;
  text-align: center;
  width: 60px;
  font-size: 15px;
  line-height: 1.6em;

  &[aria-selected='false'] {
    font-weight: 300;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  }

  &[aria-selected='true'] {
    font-weight: bolder;
    border: 2px solid #70502667;
  }

  border-radius: 20px;
  cursor: pointer;
`;
