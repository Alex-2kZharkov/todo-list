export const taskCategory = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TASK_CATEGORY': {
      state = action.payload;
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};
export const taskText = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TASK_TEXT': {
      state = action.payload;
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};

export const taskLocation = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TASK_LOCATION': {
      state = action.payload;
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};

export const taskDate = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TASK_DATE': {
      state = action.payload;
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};
