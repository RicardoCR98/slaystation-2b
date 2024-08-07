// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import DashboardBusqueda from './pages/DashboardBusqueda.jsx';
import DashboardClient from './pages/DashboardClient.jsx';
import DashboardRoot from './pages/DashboardRoot.jsx';
import { Login } from './pages/Login.jsx';
import { SignUp } from './pages/Signup.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='' element={<DashboardClient />} />
        <Route path='*' element={<Navigate to='/' replace />} />
        <Route path='/busqueda' element={<DashboardBusqueda />} />
        <Route path='/root' element={<DashboardRoot />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}
