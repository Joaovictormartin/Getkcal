import { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #282828;
    --text-color: #ffffff;
    --background-input: #1A1A1A;
    --border-input: #FF737350;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  body {
    background: var(--background);
    font-family: 'Montserrat', sans-serif;
    color: var(--text-color);
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.9;
    cursor: not-allowed;
  }

`;