import { css, createGlobalStyle } from 'styled-components';

export const reset = css`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    line-height: 1.5;
    line-height: calc(1em + 0.725rem);
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    min-height: 100vh;
    position: relative;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.PRIMARY};
  }

  ul {
    padding: 0;
  }

  #__next {
    isolation: isolate;
  }

  a:focus {
    outline: 5px auto ${({ theme }) => theme.colors.PRIMARY};
  }

  body,
  input,
  button,
  select,
  option {
    font-family: var(--font-family);
    font-weight: var(--font-weight-light);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: var(--font-weight-bold);
  }

  code {
    font-size: 0.95em;
  }
`;

const GlobalStyle = createGlobalStyle`${reset}

  @media (orientation: landscape) {
    ::-webkit-scrollbar {
      width: 5px;
      height: 2px;
      transition: background 350ms ease 0s;
      background-color:  ${({ theme }) => theme.colors.PRIMARY};
    }
    ::-webkit-scrollbar-track {
      border-radius: 3px;
      transition: background 350ms ease 0s;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      transition: background 350ms ease 0s;
      background-color: ${({ theme }) => theme.colors.SECONDARY};
    }
  }

  input:focus,
    select:focus,
    button:focus,
    textarea:focus,
    input[type=button]:focus,
    input.form-control:focus {
      box-shadow: none;
      -moz-box-shadow: none;
      outline:none !important;
      -webkit-box-shadow: none;
      outline-width: 0 !important;
      color: ${({ theme }) => theme.colors.PRIMARY};
    }

    /* Change autocomplete styles in WebKit */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.PRIMARY};
    }


  /* CSS Variables */
  :root {
    --font-weight-bold: 600;
    --font-weight-thin: 300;
    --font-weight-light: 200;
    --font-weight-medium: 500;
    --font-weight-regular: 400;

    --font-family: 'diatype', Inter, -apple-system, sans-serif;

    /* HACK:
      Reach UI tests for loaded styles, but I'm providing my own.
      This is to avoid a noisy warning in dev.
    */
   --reach-dialog: 1;
  }

  body {
    color: ${({ theme }) => theme.colors.PRIMARY};
    background: ${({ theme }) => theme.colors.BACKGROUND};
  }
`;

export default GlobalStyle;
