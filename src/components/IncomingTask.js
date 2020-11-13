import {React, useState, useRef} from 'react';


const IncomingTask = (props) => {

  const [lineThroughClass, changeLineThroughClass] = useState(''), [riseShadowClass, changeRiseShadow] = useState(''), [hiddenTask, changeHiddneTask] = useState({});
  let transformedLocation, offsetY = 0;
  const taskRef = useRef(null);

  const showRef = () => {
    while(taskRef.current) {
      offsetY += taskRef.current.offsetTop;
      taskRef.current = taskRef.current.offsetParent;
  }
  }

  const markAsFulfilled = () => {
    changeLineThroughClass('line_through_text');
    changeRiseShadow('flash_border');
    setTimeout(() => changeHiddneTask({transform: 'translateY(400px)', transition: '1s ease-in-out transform'}), 2000);
  }
  if (props.location.includes(' ') ) {
    let lastSpace = props.location.lastIndexOf(' ');
    transformedLocation = `${props.location.slice(0, lastSpace)} ,${props.location.slice(lastSpace)}`; // inserts comma
  } else transformedLocation = props.location;

  let [day, month, year] = props.date[0].split("-")
  let date = new Date(year, month - 1, day).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <div className='task' style={hiddenTask} ref={taskRef} onClick={showRef}>
      <div className={`task-icon-container ${riseShadowClass}`}>
        <img src={process.env.PUBLIC_URL + `/images/${props.category}_darker.jpg`} className='task-icon' alt='icon' />
      </div>
      <div className='task_information'>
        <p className={`task-text ${lineThroughClass}`} onClick={markAsFulfilled}>
          {props.text}
        </p>
        <div className='task-location'>{transformedLocation}</div>
      </div>
      <div className='task_date_created'>
        <div className='task_date'>{date}</div>
        <div className='task_time'>19:10</div>
      </div>
    </div>
  );
};

export default IncomingTask;
