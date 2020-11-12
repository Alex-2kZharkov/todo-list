import React from 'react';
import './Main.css';
import MainHeader from './MainHeader';
import IncomingTasks from './IncominTasks';
import {Link} from 'react-router-dom'
import FulfilledTasks from './FulfilledTasks';
import {useDispatch, useSelector} from 'react-redux';
import {countFulfilledPercent, countIncomingTasks} from '../actions/countStat'

const Main = () => {
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  dispatch(countFulfilledPercent(tasks));
  dispatch(countIncomingTasks(tasks));

  const percent = useSelector(state => state.fulfilledPercent);
  const incoming  = useSelector(state => state.incomingNumber), fulfilled = tasks.length - incoming;
  
  return (
    <div className='container'>
      <MainHeader percent={percent} tasks={tasks}/>
      <IncomingTasks incoming={incoming} />
      <FulfilledTasks fulfilled={fulfilled} />
      <Link to='/new-task'>
        <div className='new_task'></div>
      </Link>
    </div>
  );
};

export default Main;
