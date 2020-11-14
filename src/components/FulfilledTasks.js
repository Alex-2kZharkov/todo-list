
import {React, useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {countOffset} from '../actions/countOffset'
import FulfilledTask from './FulfilledTask';
import './Main.css';

const FulfilledTasks = (props) => {

  const [hideTasks, changeHideClass] = useState({}), 
  [styleArrow, changeStyleArrow] = useState('');
  const containerRef = useRef(null);
  const marginOffset = useSelector(state => state.margin);
  let tasks = null;
  if (props.tasks) {
    tasks = <div className='inner-container'>{props.tasks.map(task => <FulfilledTask key={`${task.id}`} id={task.id} text={task.text} category={task.category} location={task.location} date={task.date}/>)} </div>
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countOffset(containerRef.current));
  })

  const toggleStyles = () => {
  
    if(styleArrow) {
    
      changeHideClass({
        display: 'block',
        opacity: '0',
        transition: '0s ease-in-out opacity'
      });
     
      setTimeout(() => changeHideClass({
        opacity: '1',
        transition: '1s ease-in-out opacity'
      }), 1 );
      changeStyleArrow('');

    } else {
      changeHideClass({
        opacity: '0',
        transition: '0.5s ease-in-out opacity'
      });
      setTimeout(() =>changeHideClass({display: 'none'}), 500 );
      changeStyleArrow('style_arrow');
    }
  }
  
  return (
    <div  className='incoming-tasks-container tasks_padding_modificator' ref={containerRef}>
      <div className='fulfilled-tasks-container' style={marginOffset}>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Выполненные
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.fulfilled}</div>
        <div className='select_arrow arrow_moficator' id={`${styleArrow}`} onClick={toggleStyles}></div>
      </div>
      <div  style={hideTasks} className='inner-container'>
      {tasks}
      </div>
    </div>
  );
};

export default FulfilledTasks;