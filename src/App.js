import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './index';

const addValue = (values, value) => {
  values.push({ value });
  localStorage.setItem('values', JSON.stringify(values));
};
function App() {
  let currentCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  window.addEventListener('load', (event) => {
    console.log(JSON.parse(localStorage.getItem('values')));
  });

  let values = JSON.parse(localStorage.getItem('values'));
  return (
    <div>
      <h1>Current count {currentCounter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => addValue(values, currentCounter)}>
        Save to local storage
      </button>
    </div>
  );
}

export default App;
