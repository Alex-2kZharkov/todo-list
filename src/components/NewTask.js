import {React, useState} from 'react';
import './NewTask.css';
import { Link } from 'react-router-dom';
//import { addTask } from '../actions';
//import { useSelector, useDispatch } from 'react-redux';


const NewTask = () => {
    const [taskCategory, updateTaskCategory] = useState('friends'), [taskText, updateTaskText] = useState(''), [taskLocation, updateTaskLocation] = useState(''),[taskDate, updateTaskDate] = useState('');
  
    
    const onCategoryChange = (e) => {
      updateTaskCategory(e.target.value);
    };
    
    const onTextChange = (e,isClear) => {
      isClear ? updateTaskText('') : updateTaskText(e.target.value);
    };
    
    const onLocationChange = (e,isClear = false) => {
      isClear ? updateTaskLocation('') : updateTaskLocation(e.target.value);
    };
    
    const onDateChange = (e,isClear = false) => {
      isClear ? updateTaskDate('') : updateTaskDate(e.target.value); 

    };
    const onAddButtonClick = (e) => {
      e.preventDefault();
      // this.props.addTask({
      //   category: this.category.current.value,
      //   text: this.text.current.value,
      //   location: this.location.current.value,
      //   date: this.date.current.value,
      // });
    };
    let textShow = {}, locationShow = {}, dateShow = {};
    taskText ? textShow = {display: 'block'} : textShow = {display: 'none'};
    taskLocation ? locationShow = {display: 'block'} : locationShow = {display: 'none'};
    taskDate ? dateShow = {display: 'block'} : dateShow = {display: 'none'};

    return (
      <div className='container_new_task'>
        <div className='container_inner_new_task'>
          <Link to='/' className='back'>
            <div className='central_line'></div>
          </Link>
          <div className='page_title_container'>
            <div className='page_title'>Добавить новую задачу</div>
          </div>
          <div className='new_task_icon_container'>
            <img src={process.env.PUBLIC_URL + '/images/cooking_lighter.jpg'} className='new_task_icon' alt='icon' />
          </div>
          <form className='new_task_form'>
            <div className='new_task_category_wrapper'>
              <select
                name='category'
                className='new_task_form_item new_task_category'
                value={taskCategory}
                onChange={onCategoryChange}
              >
                <option value='friends'>Друзья</option>
                <option value='music'>Музыка</option>
                <option value='cooking'>Пища</option>
                <option value='nature'>Природа</option>
                <option value='office'>Работа</option>
                <option value='party'>Вечеринка</option>
                <option value='shopping'>Одежда</option>
                <option value='sport'>Спорт</option>
              </select>
              <div className='select_arrow'></div>
            </div>

            <div className='new_task_text_wrapper'>
              <input
                autoComplete='off'
                placeholder='Опишите задачу'
                type='text'
                className='new_task_form_item new_task_text'
                name='text'
                value={taskText}
                onChange={onTextChange}
              ></input>
              <div style={textShow} className='times' onClick={(e) => onTextChange(e, true)}></div>
            </div>
            <div className='new_task_location_wrapper'>
              <input
                autoComplete='off'
                placeholder='Место'
                type='text'
                className='new_task_form_item new_task_location'
                name='location'
                value={taskLocation}
                onChange={onLocationChange}
              ></input>
              <div style={locationShow} className='times' onClick={(e) => onLocationChange(e, true)}></div>
            </div>

            <div className='new_task_date_wrapper'>
              <input
                autoComplete='off'
                placeholder='Дата и время, например, 21 октября 2020 13:00'
                type='text'
                className='new_task_form_item new_task_date'
                value={taskDate}
                onChange={onDateChange}
              ></input>
              <div style={dateShow} className='times' onClick={(e) => onDateChange(e, true)}></div>
            </div>

            <button
              onClick={onAddButtonClick}
              type='button'
              className='add_new_task'
            >
              Добавить Вашу задачу
            </button>
          </form>
        </div>
      </div>
    );
  
}

export default NewTask;
