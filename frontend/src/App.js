import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './paginas/login/login';
import Cadastro from './paginas/cadastro/cadastro';
import Home from './paginas/home';

function App() {
  return (

    <BrowserRouter> 

    <Routes>
      <Route path="/cadastro" element={<Cadastro/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
    </Routes>

   </BrowserRouter> 

  );
}

export default App;
