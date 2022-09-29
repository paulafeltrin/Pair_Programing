import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
  align-items: center;
}
:root{
    --ff-one: 'Montserrat', sans-serif;
}

`;