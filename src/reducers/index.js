export const tasks = (
  state = JSON.parse(localStorage.getItem('tasks')),
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
          id: state.length + 1,
          category: action.payload.category,
          location: action.payload.location,
          text: action.payload.text,
          date: action.payload.date.split(' '),
          isDone: false,
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


