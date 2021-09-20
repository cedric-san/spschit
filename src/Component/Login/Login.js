import React from 'react';
import classes from './Login.module.css';
import Card from '../Cards/Card';
import Button from '../Button/Button';

const Login = () => {
  return (
    <Card className={classes.input}>
      <form>
        <label>User Name</label>
        <input />
        <label>Password </label>
        <input />
        <Button>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
