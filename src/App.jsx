import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Succes from './pages/Succes';
import Matchmaker from './pages/Matchmakers';
import Events from './pages/Events';
import Nevbar from './Component/Nevbar';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Nevbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/succes' element={<Succes/>} />
      <Route path='/matchmaker' element={<Matchmaker/>} />
      <Route path='/events' element={<Events/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
