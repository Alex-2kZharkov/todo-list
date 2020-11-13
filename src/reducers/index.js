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
          isDone: true,
        });
        state = startTask;
      } else {
        state.push({
          id: Number(state[state.length-1].id) + 1,
          category: action.payload.category,
          location: action.payload.location,
          text: action.payload.text,
          date: action.payload.date.split(' '),
          isDone: true,
        });
      }
  
      localStorage.setItem('tasks', JSON.stringify(state));
      console.log(JSON.parse(localStorage.getItem('tasks')));
      return state;
    }
    default:
      return state;
  }
};


