import React, {useState} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css"
import Home from './pages';
import SigninPage from './pages/signin';



function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
