import React from 'react';
import IncomingTask from './IncomingTask';
import './Main.css';

const IncomingTasks = () => {
  return (
    <div className='incoming-tasks-container'>
      <div className='tasks-title'>Входящие</div>
      <div className='inner-container'>
        <IncomingTask />
        <IncomingTask />
        <IncomingTask />
        <IncomingTask />
      </div>
    </div>
  );
};

export default IncomingTasks;
