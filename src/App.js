import React from 'react';
import Rotas from './services/routes';
import {createGlobalStyle} from "styled-components";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from ".Components/Footer"

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
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      <Rotas />
    </>
  );
}
export default App;
