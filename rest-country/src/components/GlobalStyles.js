import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  };
  header {
      background: ${({ theme }) => theme.body};
  };
  main {
    background: ${({ theme }) => theme.background};
  };
  .cards {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
  };
  .cardsContainer {
      background: ${({ theme }) => theme.background};
  };
  .MuiCard-root {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  };
  .searchBar {
      border: ${({ theme }) => theme.border};
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
  }`;