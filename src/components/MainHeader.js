import {React, useRef} from 'react';
import './Main.css';



const MainHeader = (props) => {

  const inputEl = useRef(null);
  let style = { backgroundColor: '#A598F9' }; 
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric'};
  let dateStr = new Date().toLocaleDateString('ru', options);
  
  const generateTime = () => {

    let today = new Date();
    let h = today.getHours(), m = today.getMinutes(), s = today.getSeconds();
    if (m < 10) m = `0${m}`;
    if (h < 10) h = `0${h}`;
    if (s < 10) s = `0${s}`;

    if (inputEl.current) inputEl.current.innerHTML = h + ":" + m + ":" + s
    setTimeout(generateTime, 500);
  }

  if (props.percent <= 50) {
    let paintPercent = 90 + (180 * props.percent) / 50;
    style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #5F6587 50%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
  } else {
    let paintPercent = 90 + (180 * (props.percent - 50)) / 50;
    style.backgroundImage = `linear-gradient(${paintPercent}deg, transparent 50%, #A598F9 25%), linear-gradient(90deg, #5F6587 50%, transparent 50%`;
  }

 
  dateStr = dateStr[0].toLocaleUpperCase('ru') + dateStr.slice(1);

  return (
    <header className='container_inner'>
      <div className='title_column'>
        <div className='title'>Ваши задачи</div>
        <div className='today_date'>{dateStr}</div>
        <div className='today_time' ref={inputEl}>{generateTime()}</div>
      </div>
      <div className='statistics_column'>
        <div className='tasks_types'>
          <div className='tasks_nr'>{props.personal}</div>
          <div className='tasks_nr'>{props.business}</div>
          <div className='task_type'>Личные</div>
          <div className='task_type'>Бизнес</div>
        </div>
        <div style={style} className='progress_circle'></div>
        <div className='fullfilled_percent'>{props.percent}% выполнено</div>
        
      </div>
      <div style={{width: `${props.percent}%`}} className='progress_bar'></div>
    </header>
  );
};

export default MainHeader;
