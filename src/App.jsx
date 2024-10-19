import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Succes from './pages/Succes';
import Matchmaker from './pages/Matchmakers';
import Events from './pages/Events';
import Navbar from './Component/Nevbar';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Succes />} />
        <Route path="/matchmaker" element={<Matchmaker />} />
        <Route path="/events" element={<Events />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
