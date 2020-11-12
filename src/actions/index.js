export const addTask = (taskInfo) => {
  return {
    type: 'ADD_TASK',
    payload: taskInfo,
  };
};

export const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id,
    },
  };
};

export const updateTask = (taskInfo) => {
  return {
    type: 'UPDATE_TASK',
    payload: taskInfo,
  };
};

export const markAsDone = (id) => {
  return {
    type: 'MARK_TASK_AS_DONE',
    payload: {
      id,
    },
  };
};


