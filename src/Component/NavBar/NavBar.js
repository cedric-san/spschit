import React from 'react';
import './NavBar.css';
import Button from '../Button/Button';

const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="textStyle">SPS Chit Funds</h1>
      <Button>Sign Up</Button>
    </div>
  );
};
export default NavBar;
