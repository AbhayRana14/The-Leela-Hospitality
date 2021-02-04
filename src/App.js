import './index.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App(){
  return(
        <Router>
          <Navbar/>
        </Router>
  )
}
export default App;

