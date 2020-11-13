export const fulfilledPercent = (state = 0, action) => {

    switch(action.type) {
        case 'COUNT_PERCENT' && action.payload: {
            let no = action.payload.reduce((accumulator, current) => current.isDone ? ++accumulator : accumulator, 0);
            state = Math.round((100 * no) / action.payload.length); // propotrion: (100% * doneTasks) / allTasks
            return state;
        }
        default: return state;
    }
}

export const incomingNumber = (state = 0, action) => {

    switch(action.type) {
        case 'COUNT_INCOMING' && action.payload: {
            state = action.payload.reduce((accumulator, current) => current.isDone ? accumulator : ++accumulator, 0);
            return state;
        }
        default: return state;
    }
}

export const fulfilledNumber = (state = 0, action) => {

    switch(action.type) {
        case 'COUNT_FULFILLED' && action.payload: {
            state = action.payload.reduce((accumulator, current) => current.isDone ? ++accumulator : accumulator, 0);
            return state;
        }
        default: return state;
    }
}

export const businessNumber = (state = 0, action) => {

    switch(action.type) {
        case 'COUNT_BUSINESS' && action.payload: {
            state = action.payload.reduce((accumulator, current) => current.category.includes('office') ? ++accumulator : accumulator, 0);
            return state;
        }
        default: return state;
    }
}

export const personalNumber = (state = 0, action) => {

    switch(action.type) {
        case 'COUNT_PERSONAL' && action.payload: {
            state = action.payload.reduce((accumulator, current) => current.category.includes('office') ? accumulator : ++accumulator, 0);
            return state;
        }
        default: return state;
    }
}
