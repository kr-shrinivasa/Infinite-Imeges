import './App.css';
import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Imagebox from './components/body/Imagebox';
// import PhotoBox from './components/gallary/PhotoBox';
// import Gallaryscroll from './components/scroll/Gallaryscroll';
import { Routes, Route  } from "react-router-dom";

import About from './components/about/About';
import Tensor from './components/tensor flow/Tensor';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <Navbar></Navbar>     
      <Routes>
        <Route path="/" element={<Imagebox/>} />
        <Route path="/about" element={<About />} />
        <Route path="/tensor" element={<Tensor />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;
