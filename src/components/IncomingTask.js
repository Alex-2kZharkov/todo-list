import React from 'react';
import logo from '../images/cooking-darker.jpg';

const IncomingTask = () => {
  return (
    <div className='task'>
      <div className='task-icon-container'>
        <img src={logo} className='task-icon' alt='icon' />
      </div>
      <div className='task_information'>
        <div className='task-text'>
          Купить пиццуjerifireifierfherfheufuherfuherfuherhfue
        </div>
        <div className='task-location'>Империя пиццы, Бишкек</div>
      </div>
      <div className='task_date_created'>
        <div className='task_date'>Октябрь 23, 2020</div>
        <div className='task_time'>19:10</div>
      </div>
    </div>
  );
};

export default IncomingTask;
