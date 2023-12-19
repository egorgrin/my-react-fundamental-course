import React from 'react';
import './styles/App.css';
import Posts from './components/pages/Posts';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import About from './components/pages/About';
import Navbar from './components/UI/navbar/Navbar';
import Error from './components/pages/Error';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Navigate to={'/error'}/>} />
          <Route path={'/error'} element={<Error/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/posts'} element={<Posts/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;