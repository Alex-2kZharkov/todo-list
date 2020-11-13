import React from 'react';
//import logo from '../../public/images/party_darker.jpg';


const FulfilledTask = (props) => {
  let transformedLocation;

  if (props.location.includes(' ') ) {
    let lastSpace = props.location.lastIndexOf(' ');
    transformedLocation = `${props.location.slice(0, lastSpace)} ,${props.location.slice(lastSpace)}`; // inserts comma
  } else transformedLocation = props.location;

  let [day, month, year] = props.date[0].split("-")
  let date = new Date(year, month - 1, day).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'});

  return (
    <div className='task'>
      <div className='task-icon-container task-icon-container-modificator'>
        <div className='task_icon_inner_container'>
          <img
            src={process.env.PUBLIC_URL + `/images/${props.category}_darker.jpg`}
            className='task_icon task_icon_modificator'
            alt='icon'
          />
        </div>
      </div>
      <div className='task_information'>
        <div className='task-text'>
          {props.text}
        </div>
        <div className='task-location'>{transformedLocation}</div>
      </div>
      <div className='task_date_created'>
        <div className='task_date'>{date}</div>
        <div className='task_time'>{props.date[1]}</div>
      </div>
    </div>
  );

  }
export default FulfilledTask;

