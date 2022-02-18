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
  .MuiAutocomplete-hasPopupIcon.css-viou3o-MuiAutocomplete-root .MuiOutlinedInput-root, .MuiAutocomplete-hasClearIcon.css-viou3o-MuiAutocomplete-root .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.text}};
  }`

