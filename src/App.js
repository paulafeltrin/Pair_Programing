import React from 'react';
import {GlobalStyle} from "./Global/GlobalStyle"
import Header from './Components/Header/index';
import Main from './Components/Main/index';
import Footer from './Components/Footer/index';

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
// const App = () => {
//   return(
//     <>
//       <GlobalStyle />
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;
