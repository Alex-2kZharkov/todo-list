import React from 'react';
import IncomingTask from './IncomingTask';
import './Main.css';

const IncomingTasks = (props) => {
 
  let tasks = null;
  if (props.tasks) {
    tasks = <div className='inner-container'>{props.tasks.map(task => <IncomingTask key={`${task.id}`} text={task.text} category={task.category} location={task.location} date={task.date}/>)} </div>
  }

  return (
    <div className='incoming-tasks-container'>
      <div className='fulfilled-tasks-container incoming-tasks-container-modificator'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Входящие
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.incoming}</div>
      </div>
        {tasks}
    </div>
  );
};

export default IncomingTasks;
