import React from 'react';
import './style.css';
import NavBar from './Component/NavBar/NavBar';
import Login from './Component/Login/Login';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Login />
    </div>
  );
}
