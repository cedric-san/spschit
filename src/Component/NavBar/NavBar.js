import React from 'react';
import './NavBar.css';
import Login from '../Login/Login';

const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="textStyle">SPS Chit Funds</h1>
      <Login />
    </div>
  );
};
export default NavBar;
