import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Components/Home/index'
import Page from '../Components/Page/index';

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/page' element={<Page/>}/>
      </Routes>
    </Router>
  )
}