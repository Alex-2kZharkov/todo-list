import {React, useState, useRef} from 'react';
import {markAsDone} from '../actions'
import {useSelector, useDispatch} from 'react-redux'
import { countMargin } from '../actions/countOffset';


const IncomingTask = (props) => {

  const [lineThroughClass, changeLineThroughClass] = useState(''), [riseShadowClass, changeRiseShadow] = useState(''), [hiddenTask, changeHiddenTask] = useState({});
  let transformedLocation, offsetY = 0, fulfilledTaskOffset = useSelector(state => state.offset);
  const taskRef = useRef(null);
  const  dispatch = useDispatch();

  const showRef = () => {
    
    let taskRefCopy = taskRef.current;

    while(taskRefCopy) {
      offsetY += taskRefCopy.offsetTop;
      taskRefCopy = taskRefCopy.offsetParent;
  }
  }

  const markAsFulfilled = () => {
    changeLineThroughClass('line_through_text');
    changeRiseShadow('flash_border');

    const changeStatusLocation = () => {
      changeHiddenTask({transform: `translateY(${fulfilledTaskOffset - offsetY}px)`, transition: '1s ease-in-out transform'});
      dispatch(countMargin(taskRef.current.clientHeight + 30));
      setTimeout(() => {
        dispatch(markAsDone(props.id));
        dispatch(countMargin(0));
      }, 1000);
    }
    setTimeout(changeStatusLocation, 2000);
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
      <div className='control_buttons'>
        <button className='control_button edit_button_container'></button>
        <button className='control_button delete_button_container'></button>
        <button className='control_button done_button_container'></button>
      </div>
    </div>
  );
};

export default IncomingTask;
