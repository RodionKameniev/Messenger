import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './app/features/mainPage/MainPage';

//import MainPage from './app/features/mainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
