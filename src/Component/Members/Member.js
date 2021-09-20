import classes from './Member.module.css';
import React from 'react';
import Card from '../Cards/Card';
import MemberList from './MemberList';
const Member = (props) => {
  return (
    <Card className={classes.member}>
      <h1>Members</h1>
      <Card className={classes.list}>
        <MemberList />
      </Card>
    </Card>
  );
};

export default Member;
