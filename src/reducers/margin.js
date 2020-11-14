export const margin = (state = {}, action) => {
    switch (action.type) {
      case 'COUNT_MARGIN': {    
        return state = {marginBottom: `${action.payload}px`};
      }
      default:
        return state;
    }
  };

  