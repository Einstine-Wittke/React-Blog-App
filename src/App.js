import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { DataBase } from './ContextApi/ContextApi';
import Type from './Components/Type';
import './App.css'

function App() {
  return (

    <DataBase>
      <BrowserRouter>
        <div className='mx-3 text-center mt-3'>
          <Navbar />
          <br />
          <hr className='bg-slate-800 ' />
          <Routes >
            <Route path='/home' element={<Home />} />
            <Route path="/:category" element={<Type/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </DataBase>
  );
}

export default App;
