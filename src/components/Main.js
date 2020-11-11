import React from 'react';
import './Main.css';
import MainHeader from './MainHeader';
import IncomingTasks from './IncominTasks';
import {Link} from 'react-router-dom'
import FulfilledTasks from './FulfilledTasks';

const Main = () => {
  return (
    <div className='container'>
      <MainHeader />
      <IncomingTasks />
      <FulfilledTasks />
    </div>
  );
};

export default Main;
