import React from 'react';
import IncomingTask from './IncomingTask';
import {useDispatch, useSelector} from 'react-redux';
import {countIncomingTasks} from '../actions/countStat'
import './Main.css';

const IncomingTasks = (props) => {
  const dispatch = useDispatch();
 
  return (
    <div className='incoming-tasks-container'>
      <div className='fulfilled-tasks-container incoming-tasks-container-modificator'>
        <div className='tasks-title fulfilled-tasks-container-title'>
          Входящие
        </div>
        <div className='fulfilled-tasks-container-quantity'>{props.incoming}</div>
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
