import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  body {
    line-height: 1;
    background-color: white;
    color: black;
    font-family: 'NanumSquareRound', sans-serif;
    text-underline-offset: 4px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    -webkit-appearance: none;
    font-family: 'NanumSquareRound', sans-serif;
  }
  input:focus, button:focus {
    outline: none;
  }
  input:disabled {
    opacity: 1;
  }
  button {
    cursor: pointer;
    font-family: 'NanumSquareRound', sans-serif;
    &:disabled {
      cursor: not-allowed;
    }
  }
  textarea {
    font-family: 'NanumSquareRound', sans-serif;
  }
`;

function StyledThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default StyledThemeProvider;
