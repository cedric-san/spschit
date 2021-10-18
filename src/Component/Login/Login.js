import React, { useState } from 'react';
import classes from './Login.module.css';
import Card from '../Cards/Card';
import Button from '../Button/Button';

const Login = () => {
  const [userName, setUserName] = useState('123');
  const [password, setPassword] = useState('');

  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input
          name="username"
          value={userName}
          onChange={changeUserNameHandler}
        />
        <label>Password </label>
        <input
          name="password"
          value={password}
          onChange={changePasswordHandler}
        />
        <Button>Login</Button>
      </form>
    </Card>
  );
};

export default Login;
