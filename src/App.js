import React from 'react';
import './App.css';
import { useRef } from "react";
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {

  //const resultRef = useRef(null)

  
  const resultRef = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    courses: useRef(null)
  };
  

  return (
    <div className="App">
      <Navbar resultRef={resultRef} />
      <Frontpage ref={resultRef} />
      <Information ref={resultRef} />
      <Footer />
    </div>
  );
}

export default App;
