import React from 'react';
import './NewTask.css';
import { Link } from 'react-router-dom';
import logo from '../images/friends_lighter.jpg';
import { addTask } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskInfo) => dispatch(addTask(taskInfo)),
  };
};

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
    this.text = React.createRef();
    this.location = React.createRef();
    this.date = React.createRef();
  }

  onAddButtonClick = (e) => {
    e.preventDefault();
    console.log(
      this.category.current.value,
      this.text.current.value,
      this.location.current.value,
      this.date.current.value
    );
    this.props.addTask({
      category: this.category.current.value,
      text: this.text.current.value,
      location: this.location.current.value,
      date: this.date.current.value,
    });
  };

  render() {
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
                name='category'
                className='new_task_form_item new_task_category'
                ref={this.category}
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
}

export default connect(null, mapDispatchToProps)(NewTask);
