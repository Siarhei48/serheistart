import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className='app-wrapper'>
      <Router >
        <Header />
        <Navbar />
        <Content />
      </Router>
    </div>
  );
}

export default App;

