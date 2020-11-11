import React from 'react';
import './NewTask.css';
import { Link } from 'react-router-dom';
import logo from '../images/friends_lighter.jpg';

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
          <div className='new_task_category_wrapper'>
            <select
              name='categories'
              className='new_task_form_item new_task_category'
            >
              <option value='friends'>Друзья</option>
              <option value='music'>Музыка</option>
              <option value='cooking'>Пища</option>
              <option value='nature'>Природа</option>
              <option value='office'>Работа</option>
              <option value='party'>пати</option>
              <option value='shopping'>Одежда</option>
              <option value='sport'>Спорт</option>
            </select>
            <div className='select_arrow'></div>
          </div>

          <div className='new_task_text_wrapper'>
            <input
              placeholder='Опишите Вашу задачу'
              type='text'
              className='new_task_form_item new_task_text'
              text='text'
            ></input>
            <div className='times'></div>
          </div>
          <div className='new_task_location_wrapper'>
            <input
              placeholder='Место'
              type='text'
              className='new_task_form_item new_task_location'
              name='location'
            ></input>
            <div className='times'></div>
          </div>

          <div className='new_task_date_wrapper'>
            <input
              placeholder='Дата и время'
              type='text'
              className='new_task_form_item new_task_date'
              name='date'
            ></input>
            <div className='times'></div>
          </div>

          <button type='button' className='add_new_task'>
            Добавить Вашу задачу
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
