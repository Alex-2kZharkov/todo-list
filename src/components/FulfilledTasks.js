import React from 'react';
import FulfilledTask from './FulfilledTask';
import './Main.css';

const FulfilledTasks = () => {
  return (
    <div className='incoming-tasks-container'>
      <div className='fulfilled-tasks-container'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Завершенные
        </div>
        <div className='fulfilled-tasks-container-quantity'>1</div>
      </div>
      <div className='inner-container'>
        <FulfilledTask />
      </div>
    </div>
  );
};

export default FulfilledTasks;
