export const offset = (state = 0, action) => {
    switch (action.type) {
      case 'COUNT_OFFSET': {
        let offsetY = 0;
        while(action.payload) {
            offsetY += action.payload.offsetTop;
            action.payload = action.payload.offsetParent;
        }
        return state = offsetY + 75;
      }
      default:
        return state;
    }
  };

  