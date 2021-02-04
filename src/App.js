import './index.css';
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages';

function App(){
  return(
        <Router>
          <Home/> 
        </Router>
  )
}
export default App;

