import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './app/features/registration/Registration';
import MainChat from './app/features/mainChat/MainChat';

//import MainPage from './app/features/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainChat />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
