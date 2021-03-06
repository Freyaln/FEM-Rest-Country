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
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.text};
  };
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    color: ${({ theme }) => theme.text}};
  };
  .css-1ixds2g {
    color: ${({ theme }) => theme.text}};
  };
  .css-vubbuv {
    color: ${({ theme }) => theme.text}};
  };
  .css-1ujsas3 {
    color: ${({ theme }) => theme.text}};
  };
  .css-24b8ux {
    background: ${({ theme }) => theme.body};
  };
  .borderCountries {
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    border: 1px solid #000;
    background: ${({ theme }) => theme.background};
  }`

