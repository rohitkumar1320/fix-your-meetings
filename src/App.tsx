import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Foto from './assests/work.gif';

function App() {
  return (
    <div className='flex justify-center h-screen bg-cover' style={{backgroundImage: `url(${Foto})`}}>
      <Home></Home>
    </div>
  );
}

export default App;
