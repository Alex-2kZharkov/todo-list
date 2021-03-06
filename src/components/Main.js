import {React, useState} from 'react';
import './Main.css';
import MainHeader from './MainHeader';
import IncomingTasks from './IncominTasks';
import {Link} from 'react-router-dom'
import FulfilledTasks from './FulfilledTasks';
import { useSelector} from 'react-redux';


const Main = () => {
  const tasks = useSelector(state => state.tasks);
  let incomingTasks = tasks ? tasks.filter(task => !task.isDone) : null,
  fulfilledTasks = tasks ? tasks.filter(task => task.isDone) : null,
  percent = tasks ? Math.round((100 * fulfilledTasks.length) / tasks.length) : 0, 

  incoming  = incomingTasks ? incomingTasks.length : 0, fulfilled = fulfilledTasks ? fulfilledTasks.length : 0,
  business = tasks ? tasks.reduce((accumulator, current) => current.category.includes('office') ? ++accumulator : accumulator, 0) : 0;
  const personal = tasks.length - business;
  const [hideTasks, changeHideClass] = useState({}); 
  const [addButtonPos, changeaddButtonPos] = useState({ transition: '0.5s ease-in-out bottom'}); 
  const [isIncomingClosed, changeIsIncomingClosed] = useState(false);
  if (isNaN(percent)) percent = 0;
 
  return (
    <div className='container'>
      <div className='primary_inner_container'>
      <MainHeader percent={percent} tasks={tasks} business={business} personal={personal}/>
      <IncomingTasks changeIsIncomingClosed={changeIsIncomingClosed} changeaddButtonPos={changeaddButtonPos} changeHideClass={changeHideClass} tasks={incomingTasks} incoming={incoming} />
      <FulfilledTasks isIncomingClosed={isIncomingClosed} changeaddButtonPos={changeaddButtonPos} hideTasks={hideTasks} changeHideClass={changeHideClass} tasks={fulfilledTasks} fulfilled={fulfilled} />
      <Link style={addButtonPos} to='/new-task' className='new_task_container'>
        <div className='new_task'></div>
      </Link>
      </div>
    </div>
  );
};

export default Main;
