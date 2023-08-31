import React from 'react'
import './Components/portfolio.css'
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Contact from './Components/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
