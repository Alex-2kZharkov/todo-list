import React from 'react';
import './NewTask.css';
import { Link } from 'react-router-dom';
import logo from '../images/office_lighter.jpg';

const NewTask = () => {
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
          <img src={logo} className='new_task_icon' alt='icon' />
        </div>
        <form className='new_task_form'>
          <input
            type='combo'
            className='new_task_form_item new_task_category'
            name='category'
          ></input>
          <input
            placeholder='Опишите Вашу задачу'
            type='text'
            className='new_task_form_item new_task_text'
            text='text'
          ></input>
          <input
            placeholder='Место'
            type='text'
            className='new_task_form_item new_task_location'
            name='location'
          ></input>
          <input
            placeholder='Дата и время'
            type='text'
            className='new_task_form_item new_task_date'
            name='date'
          ></input>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
