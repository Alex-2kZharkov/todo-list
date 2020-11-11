import React from 'react';
import './Main.css';

let percent = 57,
  style = { backgroundColor: '#A598F9' };
if (percent <= 50) {
  let paintPercent = 90 + (180 * percent) / 50;
  style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #5F6587 50%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
} else {
  let paintPercent = 90 + (180 * (percent - 50)) / 50;
  style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #A598F9 50%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
}

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
        <div className='fullfilled_percent'>57% выполнено</div>
      </div>
    </header>
  );
};

export default MainHeader;
