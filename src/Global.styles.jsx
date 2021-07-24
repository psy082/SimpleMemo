import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyles = css`
  ${emotionNormalize}

  ul,
  ol {
    list-style: none;
    margin: 0;
  }

  a {
    text-decoration: none;

    &:visited &:hover,
    &:active {
      text-decoration: none;
    }
  }

  *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #4d4d4d;
    background-color: #f5f5f5;
  }

  th {
    font-weight: 200;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
