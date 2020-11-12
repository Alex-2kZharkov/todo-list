export const fulfilledPercent = (state, action) => {

    switch(action.type) {
        case 'COUNT_PERCENT': {
            let no = action.payload.reduce((accumulator, current) => current.isDone ? ++accumulator : accumulator, 0);
            state = Math.round(100 * no) / action.payload.length; // (100% * doneTasks) / allTasks
            console.log(state);
            return state;
        }
        default: return state;
    }

}