import {React, useState} from 'react';
import './NewTask.css';
import { Link } from 'react-router-dom';
import { addTask } from '../actions';
import { useSelector, useDispatch } from 'react-redux';


const NewTask = () => {
    const [taskCategory, updateTaskCategory] = useState(), [taskText, updateTaskText] = useState(), [taskLocation, updateTaskLocation] = useState(),[taskDate, updateTaskDate] = useState();
  
    const onCategoryChange = () => {
      updateTaskCategory(this.category.current.value);
    };
    
    const onTextChange = (isClear = false) => {
      if(isClear) {
        this.text.current.value = ''
      }  
      updateTaskText(this.text.current.value);
    };
    
    const onLocationChange = (isClear = false) => {
       if(isClear) {
        this.location.current.value = ''
      } 
      updateTaskLocation(this.location.current.value);
    };
    
    const onDateChange = (isClear = false) => {
       if(isClear) {
        this.date.current.value = ''
      } 
      updateTaskDate(this.date.current.value);
      
    };
    const onAddButtonClick = (e) => {
      e.preventDefault();
      this.props.addTask({
        category: this.category.current.value,
        text: this.text.current.value,
        location: this.location.current.value,
        date: this.date.current.value,
      });
    };

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
                ref={this.category}
                onChange={this.onCategoryChange}
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
                ref={this.text}
                onChange={this.onTextChange}
              ></input>
              <div className='times'></div>
            </div>
            <div className='new_task_location_wrapper'>
              <input
                autoComplete='off'
                placeholder='Место'
                type='text'
                className='new_task_form_item new_task_location'
                name='location'
                ref={this.location}
                onChange={this.onLocationChange}
              ></input>
              <div className='times'></div>
            </div>

            <div className='new_task_date_wrapper'>
              <input
                autoComplete='off'
                placeholder='Дата и время'
                type='text'
                className='new_task_form_item new_task_date'
                name='date'
                ref={this.date}
                onChange={this.onDateChange}
              ></input>
              <div className='times'></div>
            </div>

            <button
              onClick={this.onAddButtonClick}
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
