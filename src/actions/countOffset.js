export const countOffset = (node) => {
    return {
      type: 'COUNT_OFFSET',
      payload: node,
    };
  };
  
  export const countMargin = (height) => {
    return {
      type: 'COUNT_MARGIN',
      payload: height,
    };
  };