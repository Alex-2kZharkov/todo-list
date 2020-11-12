import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {countFulfilledPercent} from '../actions/countFulfilledPercent'
import './Main.css';


  
const MainHeader = (props) => {
  const dispatch = useDispatch();
  dispatch(countFulfilledPercent(props.tasks));

  const percent = useSelector(state => state.fulfilledPercent)

  let style = { backgroundColor: '#A598F9' };
  if (percent <= 50) {
    let paintPercent = 90 + (180 * percent) / 50;
    style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #5F6587 50%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
  } else {
    let paintPercent = 90 + (180 * (percent - 50)) / 50;
    style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #A598F9 50%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
  }
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric'};
  let dateStr = new Date().toLocaleDateString('ru', options);
  dateStr = dateStr[0].toLocaleUpperCase('ru') + dateStr.slice(1);

  return (
    <header className='container_inner'>
      <div className='title_column'>
        <div className='title'>Ваши задачи</div>
        <div className='today_date'>{dateStr}</div>
      </div>
      <div className='statistics_column'>
        <div className='tasks_types'>
          <div className='tasks_nr'>24</div>
          <div className='tasks_nr'>15</div>
          <div className='task_type'>Личные</div>
          <div className='task_type'>Бизнес</div>
        </div>
        <div style={style} className='progress_circle'></div>
        <div className='fullfilled_percent'>{percent}% выполнено</div>
        
      </div>
      <div style={{width: `${percent}%`}} className='progress_bar'></div>
    </header>
  );
};

export default MainHeader;
