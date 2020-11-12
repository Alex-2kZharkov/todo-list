export const countFulfilledPercent = (tasks) => {
    return {
        type: 'COUNT_PERCENT',
        payload: tasks
    }
}