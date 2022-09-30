import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }

  :root{
      --ff-one: 'Montserrat', sans-serif;
  }

`;