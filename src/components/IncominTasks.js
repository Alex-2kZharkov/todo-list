import React from 'react';
import IncomingTask from './IncomingTask';
import './Main.css';

const IncomingTasks = () => {
  return (
    <div className='incoming-tasks-container'>
      <div className='fulfilled-tasks-container incoming-tasks-container-modificator'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Входящие
        </div>
        <div className='fulfilled-tasks-container-quantity'>4</div>
      </div>
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
