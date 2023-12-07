import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/Notfound/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/portefolio' element={<Home />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



