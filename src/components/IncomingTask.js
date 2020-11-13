import React from 'react';


const IncomingTask = (props) => {
  let transformedLocation;

  if (props.location.includes(' ') ) {
    let lastSpace = props.location.lastIndexOf(' ');
    transformedLocation = `${props.location.slice(0, lastSpace)} ,${props.location.slice(lastSpace)}`; // inserts comma
  } else transformedLocation = props.location;

  let [day, month, year] = props.date[0].split("-")
  let date = new Date(year, month - 1, day).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <div className='task'>
      <div className='task-icon-container'>
        <img src={process.env.PUBLIC_URL + `/images/${props.category}_darker.jpg`} className='task-icon' alt='icon' />
      </div>
      <div className='task_information'>
        <div className='task-text'>
          {props.text}
        </div>
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
