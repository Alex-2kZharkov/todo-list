export const tasks = (
  state = JSON.parse(localStorage.getItem('tasks')) || '' ,
  action
) => {
  switch (action.type) {
    case 'ADD_TASK': {
      if (!state) {
        let startTask = [];
        startTask.push({
          id: startTask.length + 1,
          category: action.payload.category,
          location: action.payload.location,
          text: action.payload.text,
          date: action.payload.date.split(' '),
          isDone: false,
        });
        state = startTask;
      } else {
        state.push({
          id: Number(state[state.length-1].id) + 1,
          category: action.payload.category,
          location: action.payload.location,
          text: action.payload.text,
          date: action.payload.date.split(' '),
          isDone: false,
        });
      }
  
      localStorage.setItem('tasks', JSON.stringify(state));
      return state;
    }
    case 'MARK_TASK_AS_DONE': {
      let index = state.indexOf((item) => item.id === action.payload)
      let updated = state.splice(index, 1)
      updated[0].isDone = true;
      let temp = state.slice(0, state.unshift(updated[0]));
      state = temp;

      localStorage.setItem('tasks', JSON.stringify(state));
      //state = JSON.parse(localStorage.getItem('tasks'));
      console.log('!!!!!!!!!!!!!!!!!!',updated[0]);
      return state ;
    }
    default:
      return state;
  }
};


