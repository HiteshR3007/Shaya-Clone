import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartPage from './pages/CartPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
