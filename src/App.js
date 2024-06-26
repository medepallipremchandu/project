import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/footer';
import ContactForm from './components/Contactus';

const App = () => {
    return (
      <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm/>} />
      </Routes>
      <Footer/>
    </Router>
    );
  }

export default App;