export const countFulfilledPercent = (tasks) => {
    return {
        type: 'COUNT_PERCENT',
        payload: tasks
    }
}
export const countIncomingTasks = (tasks) => {
    return {
        type: 'COUNT_INCOMING',
        payload: tasks
    }
}

export const countFulfilledTasks = (tasks) => {
    return {
        type: 'COUNT_FULFILLED',
        payload: tasks
    }
}

export const countBusinessTasks = (tasks) => {
    return {
        type: 'COUNT_BUSINESS',
        payload: tasks
    }
}

export const countPersonalTasks = (tasks) => {
    return {
        type: 'COUNT_PERSONAL',
        payload: tasks
    }
}