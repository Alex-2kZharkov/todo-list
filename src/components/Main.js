import React from 'react';
import './Main.css';
import MainHeader from './MainHeader';
import IncomingTasks from './IncominTasks';
import {Link} from 'react-router-dom'
import FulfilledTasks from './FulfilledTasks';
import {useDispatch, useSelector} from 'react-redux';
import {countFulfilledPercent, countIncomingTasks, countBusinessTasks, countPersonalTasks, countFulfilledTasks} from '../actions/countStat'

const Main = () => {
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();
  dispatch(countFulfilledPercent(tasks));
  dispatch(countIncomingTasks(tasks));
  dispatch(countPersonalTasks(tasks));
  dispatch(countFulfilledTasks(tasks));
  dispatch(countBusinessTasks(tasks));

  const percent = useSelector(state => state.fulfilledPercent), 
  incoming  = useSelector(state => state.incomingNumber), fulfilled = useSelector(state => state.fulfilledNumber),
  business = useSelector(state => state.businessNumber), personal = useSelector(state => state.personalNumber);

  console.log(tasks);
  
  return (
    <div className='container'>
      <div className='primary_inner_container'>
      <MainHeader percent={percent} tasks={tasks} business={business} personal={personal}/>
      <IncomingTasks tasks={tasks ? tasks.filter(task => !task.isDone) : null} incoming={incoming} />
      <FulfilledTasks  fulfilled={fulfilled} />
      <Link to='/new-task'>
        <div className='new_task'></div>
      </Link>
      </div>
    </div>
  );
};

export default Main;
