import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all: unset;
    }
    * {
      box-sizing: border-box;
    }
    body {
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;

export default GlobalStyles;
