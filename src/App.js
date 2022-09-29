import React from 'react';
import {GlobalStyle} from "./Global/GlobalStyle"
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';


const App = () => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
