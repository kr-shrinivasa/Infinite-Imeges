import './App.css';
import React from 'react';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Imagebox from './components/body/Imagebox';
import PhotoBox from './components/gallary/PhotoBox';

function App() {
  return (
    <div className="App-main">
      {/* <Navbar></Navbar> */}
      <Imagebox/>
      <PhotoBox/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
