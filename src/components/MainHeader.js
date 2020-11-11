import React from 'react';
import './Main.css';
import './Main.css';

let style = {
  background: 'linear-gradient(-135deg, #A598F9, 80%,#5F6587 20%)',
};

const MainHeader = () => {
  return (
    <header className='container_inner'>
      <div className='title_column'>
        <div className='title'>Ваши задачи</div>
        <div className='today_date'>{new Date().toDateString()}</div>
      </div>
      <div className='statistics_column'>
        <div className='tasks_types'>
          <div className='tasks_nr'>24</div>
          <div className='tasks_nr'>15</div>
          <div className='task_type'>Личные</div>
          <div className='task_type'>Бизнес</div>
        </div>
        <div style={style} className='progress_circle'></div>
        <div className='fullfilled_percent'>65% выполнено</div>
      </div>
    </header>
  );
};

export default MainHeader;
