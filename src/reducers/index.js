export const tasks = (
  state = JSON.parse(localStorage.getItem('tasks')) || '' ,
  action
) => {
  switch (action.type) {
    case 'ADD_TASK': {
      if (!state) {
        let startTask = [];
        startTask.push({
          id: Date.now(),
          category: action.payload.category,
          location: action.payload.location,
          text: action.payload.text,
          date: action.payload.date.split(' '),
          isDone: false,
        });
        state = startTask;
      } else {
        state.push({
          id: Date.now(),
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
      let index = state.findIndex((item) => item.id === action.payload)
      let [updated] = state.splice(index, 1);
      updated.isDone = true;
      state = [].concat(updated, state);
      localStorage.setItem('tasks', JSON.stringify(state));
      return state ;
    }

    case 'REMOVE_TASK': {
      let index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1);
      state = [].concat(state);
      localStorage.setItem('tasks', JSON.stringify(state));
      return state ;
    }

    default:
      return state;
  }
};


