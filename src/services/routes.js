import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home/index';
import Main from '../Components/Main/Main';

export default function Rotas(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </Router>
  )
}