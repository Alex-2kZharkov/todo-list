import React from 'react';
import FulfilledTask from './FulfilledTask';
import './Main.css';

const FulfilledTasks = (props) => {
  return (
    <div className='incoming-tasks-container tasks_padding_modificator'>
      <div className='fulfilled-tasks-container'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Выполненные
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.fulfilled}</div>
      </div>
      <div className='inner-container'>
        <FulfilledTask />
      </div>
    </div>
  );
};

export default FulfilledTasks;
