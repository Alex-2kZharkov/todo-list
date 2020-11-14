import {React, useState} from 'react';
import {removeTask} from '../actions'
import {useDispatch} from 'react-redux'

const FulfilledTask = (props) => {
  let transformedLocation,
  [day, month, year] = props.date[0].split("-"),
  date = new Date(year, month - 1, day).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'});
  const  dispatch = useDispatch(), [removingAnimation, changeRemovingAnimation] = useState('');

  if (props.location.includes(' ') ) {
    let lastSpace = props.location.lastIndexOf(' ');
    transformedLocation = `${props.location.slice(0, lastSpace)} ,${props.location.slice(lastSpace)}`; // inserts comma
  } else transformedLocation = props.location;


  const onRemoveClick = () => {
    changeRemovingAnimation('remove_task_anim');
    setTimeout(() => dispatch(removeTask(props.id)), 1000);
  }

  return (
    <div className={`task ${removingAnimation}`}>
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
        <div className='task-text task-text-modificator'>
          {props.text}
        </div>
        <div className='task-location'>{transformedLocation}</div>
      </div>
      <div className='task_date_created'>
        <div className='task_date'>{date}</div>
        <div className='task_time'>{props.date[1]}</div>
      </div>
      <div className='control_buttons'>
        <button className='control_button delete_button_container' onClick={onRemoveClick}></button>
      </div>
    </div>
  );

  }
export default FulfilledTask;

