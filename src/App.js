import React from 'react';
import MultiStepForm from './Components/Form/MultiStepForm';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './Components/Form/Success';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MultiStepForm/>} />
      <Route path='/Success' element={<Success/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
