import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

