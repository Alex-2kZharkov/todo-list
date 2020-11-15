import {React, useState, useRef} from 'react';
import IncomingTask from './IncomingTask';
import './Main.css';

const IncomingTasks = (props) => {
 
  const tasksRef = useRef(null);
  const [hideTasks, changeHideClass] = useState({}), 
  [styleArrow, changeStyleArrow] = useState('');

  let tasks = null;
  if (props.tasks) {
    tasks = <div className='inner-container'>{props.tasks.map(task => <IncomingTask key={`${task.id}`} id={task.id} text={task.text} category={task.category} location={task.location} date={task.date}/>)} </div>
  }

  const toggleStyles = () => {
  
    if(styleArrow) {
    
      changeHideClass({
        display: 'block',
        opacity: '1',
        transition: '0s ease-in-out opacity'
      });
      props.changeHideClass({
        transform: `translateY(0px)`, 
        transition: '0.5s ease-in-out transform'
      });
      props.changeaddButtonPos({
        bottom: `10px`, 
        transition: '0.5s ease-in-out bottom'
      })
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
      props.changeHideClass({
        transform: `translateY(-${tasksRef.current.clientHeight+20}px)`, 
        transition: '0.5s ease-in-out transform'
      });
      props.changeaddButtonPos({
        bottom: `${tasksRef.current.clientHeight+30}px`, 
        transition: '0.5s ease-in-out bottom'
      })
     // setTimeout(() =>changeHideClass({display: 'none'}), 500 );
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
        <div className='select_arrow arrow_moficator' id={`${styleArrow}`} onClick={toggleStyles}></div>
      </div>
       <div ref={tasksRef} style={hideTasks} > {tasks}</div>
    </div>
  );
};

export default IncomingTasks;
