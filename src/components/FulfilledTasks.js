
import {React, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux'
import {countOffset} from '../actions/countOffset'
import FulfilledTask from './FulfilledTask';
import './Main.css';

const FulfilledTasks = (props) => {

  const containerRef = useRef(null);
  let tasks = null;
  if (props.tasks) {
    tasks = <div className='inner-container'>{props.tasks.map(task => <FulfilledTask key={`${task.id}`} text={task.text} category={task.category} location={task.location} date={task.date}/>)} </div>
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countOffset(containerRef.current));
  })

  return (
    <div className='incoming-tasks-container tasks_padding_modificator' ref={containerRef}>
      <div className='fulfilled-tasks-container'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Выполненные
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.fulfilled}</div>
      </div>
      <div className='inner-container'>
      {tasks}
      </div>
    </div>
  );
};

export default FulfilledTasks;