
import {React, useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {countOffset} from '../actions/countOffset'
import FulfilledTask from './FulfilledTask';
import './Main.css';

const FulfilledTasks = (props) => {

  const [hideTasks, changeHideClass] = useState({}), 
  [styleArrow, changeStyleArrow] = useState('');
  const containerRef = useRef(null);
  const tasksRef = useRef(null);
  const marginOffset = useSelector(state => state.margin);
  const [refuceHeight, changeReduceHeight] = useState('');
  const [isFulfilledClose, changeIsfulfilledClose]  = useState(false);
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
    
      changeIsfulfilledClose(false);
      changeHideClass({
        display: 'block',
        opacity: '1',
        transition: '0s ease-in-out opacity'
      });
      changeHideClass({
        transform: `translateY(0px)`, 
        opacity: '1',
        transition: '0.5s ease-in-out opacity, 0.5s ease-in-out transform'
      });
      
      setTimeout(() => changeHideClass({
        opacity: '1',
        pointerEvents: 'all',
        transition: '0.5s ease-in-out opacity, 0.5s ease-in-out transform'
      }), 1 );
      setTimeout(() => {
         changeReduceHeight('');
         if(props.isIncomingClosed && isFulfilledClose) {
          props.changeaddButtonPos({
            bottom: `35%`, 
            transition: '0s ease-in-out bottom'
          })
        }
        else {
          props.changeaddButtonPos({
            bottom: `10px`, 
            transition: '0.5s ease-in-out bottom'
          })
        }
      }, 350);
     
      changeStyleArrow('');

    } else if (!props.isIncomingClosed) {
      changeIsfulfilledClose(true);
      changeHideClass({
        transform: `translateY(-${tasksRef.current.clientHeight}px)`, 
        opacity: '0',
        pointerEvents: 'none',
        transition: '0.5s ease-in-out opacity, 0.5s ease-in-out transform'
      });
      props.changeaddButtonPos({
        bottom: `${tasksRef.current.clientHeight / 3}px`, 
        transition: '0.5s ease-in-out bottom'
      })
      setTimeout(() => changeReduceHeight('reduce_height'), 350);
      changeStyleArrow('style_arrow');
    }
  }
  
  return (
    <div  style={props.hideTasks} className={`incoming-tasks-container tasks_padding_modificator ${refuceHeight}`} ref={containerRef}>
      <div className='fulfilled-tasks-container' style={marginOffset}>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Выполненные
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.fulfilled}</div>
        <div className='select_arrow arrow_moficator' id={`${styleArrow}`} onClick={toggleStyles}></div>
      </div>
      <div ref={tasksRef} style={hideTasks} className='inner-container'>
      {tasks}
      </div>
    </div>
  );
};

export default FulfilledTasks;