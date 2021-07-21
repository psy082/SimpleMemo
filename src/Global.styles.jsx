import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyles = css`
  ${emotionNormalize}

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;

    $:visited &:hover,
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

  * {
    box-sizing: border-box;
    font: inherit;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
