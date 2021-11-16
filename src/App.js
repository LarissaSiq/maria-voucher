import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';
import { PageNotFound } from './pages/PageNotFound';
import './App.css';

function App() {
  const user = () => localStorage.getItem('uid');
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={user() ? < Dashboard /> : <Navigate to='/login' />} />
      <Route path='/login' element={< Login />} />
      <Route path='*' exact={true} element={<PageNotFound />} />
    </Routes >
  )
}

export default App;