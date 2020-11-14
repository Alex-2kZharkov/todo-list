import {React, useState} from 'react';
import IncomingTask from './IncomingTask';
import './Main.css';

const IncomingTasks = (props) => {
 
  const [hideTasks, changeHideClass] = useState(''), 
  [styleArrow, changeStyleArrow] = useState('');

  let tasks = null;
  if (props.tasks) {
    tasks = <div className='inner-container'>{props.tasks.map(task => <IncomingTask key={`${task.id}`} id={task.id} text={task.text} category={task.category} location={task.location} date={task.date}/>)} </div>
  }

  const toggleClasses = () => {
    console.log('click');
    if(styleArrow) {
      changeHideClass('show_incoming_tasks');
      changeStyleArrow('');
    } else {
      changeHideClass('hide_incoming_tasks');
      setTimeout(() => changeHideClass('hide_incoming_tasks2'), 1000);
      changeStyleArrow('style_arrow');
    }
  }
  return (
    <div className='incoming-tasks-container'>
      <div className='fulfilled-tasks-container incoming-tasks-container-modificator'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Входящие
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.incoming}</div>
        <div className='select_arrow arrow_moficator' id={`${styleArrow}`} onClick={toggleClasses}></div>
      </div>
       <div className={`${hideTasks}`}> {tasks}</div>
    </div>
  );
};

export default IncomingTasks;
