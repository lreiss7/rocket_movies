import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --base-font-size: 62.5%;
  }
  
  html {
    font-size: var(--base-font-size);
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  button, a { 
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a { 
    filter: brightness
  }

`