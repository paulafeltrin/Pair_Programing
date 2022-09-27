import React from 'react';
import Rotas from './services/routes';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
const App = ()=>{
  return(
    <>
      <GlobalStyle />
      <Rotas />
    </>
  );
}
export default App;
