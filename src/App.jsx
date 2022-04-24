import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './containers/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Country from './containers/Country';
import Brand from './containers/Brand';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:country' element={<Country />} />
          <Route path='/brand/:brandId' element={<Brand />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
