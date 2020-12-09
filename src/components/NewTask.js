import { React, useState, useRef, useEffect } from 'react';
import './NewTask.css';
import { Link, useHistory } from 'react-router-dom';
import { addTask } from '../actions';
import { useDispatch } from 'react-redux';

const NewTask = () => {
	const selectedMonth  = useRef(null);
	const categoryRef = useRef(null);
	const [circleOffset, setCircleOffset] = useState({});


	const currentDate = new Date();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const dispatch = useDispatch();
	const history = useHistory();
	const [ taskCategory, updateTaskCategory ] = useState('home'),
		[ taskText, updateTaskText ] = useState(''),
		[ taskLocation, updateTaskLocation ] = useState(''),
		[ taskDay, updateTaskDay ] = useState(currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()),
		[ taskMonth, updateTaskMonth ] = useState(monthNames[currentDate.getMonth()]),
		[ taskYear, updateTaskYear ] = useState(currentDate.getFullYear()),
		[ taskHours, updateTaskHours ] = useState(currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours()),
		[ taskMinutes, updateTaskMinutes ] = useState(
			currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes()
		);

	const onCategoryChange = (e) => {
		updateTaskCategory(e.target.value);

	};
	useEffect(() => {
		setCircleOffset({
			left: `${categoryRef.current.options[categoryRef.current.selectedIndex].text.length * 14}px`
		})
	}, [taskCategory])

	const onTextChange = (e, isClear = false) => {
		isClear ? updateTaskText('') : updateTaskText(e.target.value);
	};

	const onLocationChange = (e, isClear = false) => {
		isClear ? updateTaskLocation('') : updateTaskLocation(e.target.value);
	};

	const onDayChange = (e) => updateTaskDay(e.target.value);
	const onMonthChange = (e) => updateTaskMonth(e.target.value);
	const onYearChange = (e) => updateTaskYear(e.target.value);
	const onHoursChange = (e) => updateTaskHours(e.target.value);
	const onMinutesChange = (e) => updateTaskMinutes(e.target.value);


	const onAddButtonClick = (e) => {
		e.preventDefault();
		dispatch(
			addTask({
				category: taskCategory,
				text: taskText,
				location: taskLocation,
				date: `${taskDay}-${selectedMonth.current.selectedIndex+1}-${taskYear} ${taskHours}:${taskMinutes}`
			})
		);
		history.replace(e.target.pathname); // added task and went back to main page
	};
	let textShow = {},
		locationShow = {},
		dayShow = {},
		yearShow = {},
		hoursShow = {},
		minutesShow = {};

	taskText ? (textShow = { display: 'block' }) : (textShow = { display: 'none' });
	taskLocation ? (locationShow = { display: 'block' }) : (locationShow = { display: 'none' });
	taskDay ? (dayShow = { display: 'block' }) : (dayShow = { display: 'none' });
	taskYear ? (yearShow = { display: 'block' }) : (yearShow = { display: 'none' });
	taskHours ? (hoursShow = { display: 'block' }) : (hoursShow = { display: 'none' });
	taskMinutes ? (minutesShow = { display: 'block' }) : (minutesShow = { display: 'none' });

	return (
		<div className="container_new_task">
			<div className="container_inner_new_task">
				<Link to="/" className="back">
					<div className="central_line" />
				</Link>
				<div className="page_title_container">
					<div className="page_title">Добавить новую задачу</div>
				</div>
				<div className="new_task_icon_container">
					<img
						src={process.env.PUBLIC_URL + `/images/${taskCategory}_lighter.jpg`}
						className="new_task_icon"
						alt="icon"
					/>
				</div>
				<form className="new_task_form">
					<div className="new_task_category_wrapper" >
						<select
							name="category"
							className="new_task_form_item new_task_category"
							value={taskCategory}
							onChange={onCategoryChange}
							ref={categoryRef}
						>
							<option value="home">Дом</option>
							<option value="friends">Друзья</option>
							<option value="music">Музыка</option>
							<option value="cooking">Пища</option>
							<option value="nature">Природа</option>
							<option value="office">Работа</option>
							<option value="party">Вечеринка</option>
							<option value="shopping">Одежда</option>
							<option value="sport">Спорт</option>
						</select>
						<div style={circleOffset} className={'small-circle'}/>
						<div className="select-arrow" />
					</div>

					<div className="new_task_text_wrapper">
						<input
							autoComplete="off"
							placeholder="Опишите задачу"
							type="text"
							className="new_task_form_item new_task_text"
							name="text"
							value={taskText}
							onChange={onTextChange}
						/>
						<div style={textShow} className="times" onClick={(e) => onTextChange(e, true)} />
					</div>
					<div className="new_task_location_wrapper">
						<input
							autoComplete="off"
							placeholder="Место"
							type="text"
							className="new_task_form_item new_task_location"
							name="location"
							value={taskLocation}
							onChange={onLocationChange}
						/>
						<div style={locationShow} className="times" onClick={(e) => onLocationChange(e, true)} />
					</div>

					<div className="new_task_date_wrapper">
						<div className="date-time-field">
							<input
								autoComplete="off"
								placeholder="День"
								type="text"
								className="new_task_form_item new_task_date"
								value={taskDay}
								onChange={onDayChange}
							/>

						</div>
						<div className="date-time-field month-item">
							<select
								name="category"
								className="new_task_form_item new_task_category"
								value={taskMonth}
								onChange={onMonthChange}
								ref={selectedMonth}
							>
								<option value="January">Январь</option>
								<option value="February">Февраль</option>
								<option value="March">Март</option>
								<option value="April">Апрель</option>
								<option value="May">Май</option>
								<option value="June">Июнь</option>
								<option value="July">Июль</option>
								<option value="August">Август</option>
								<option value="September">Сентябрь</option>
								<option value="October">Октябрь</option>
								<option value="November">Ноябрь</option>
								<option value="December">Декабрь</option>
							</select>
							<div className="select-arrow month-arrow-modification" />
						</div>
						<div className="date-time-field year-item">
							<input
								autoComplete="off"
								placeholder="Год"
								type="text"
								className="new_task_form_item new_task_date"
								value={taskYear}
								onChange={onYearChange}
							/>

						</div>
						<div className="date-time-field">
							<input
								autoComplete="off"
								placeholder="Часы"
								type="text"
								className="new_task_form_item new_task_date"
								value={taskHours}
								onChange={onHoursChange}
							/>

						</div>
						<div className="date-time-field">
							<input
								autoComplete="off"
								placeholder="Минуты"
								type="text"
								className="new_task_form_item new_task_date"
								value={taskMinutes}
								onChange={onMinutesChange}
							/>

						</div>
					</div>

					<Link to="/" onClick={onAddButtonClick} type="button" className="add_new_task">
						Добавить Вашу задачу
					</Link>
				</form>
			</div>
		</div>
	);
};

export default NewTask;
