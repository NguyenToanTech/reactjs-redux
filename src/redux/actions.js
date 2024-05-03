export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (id) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: id
    }
}

export const searchFillter = (value) => {
    return {
        type: 'filters/searchFilterChange',
        payload: value
    }
}

export const statusFillter = (value) => {
    return {
        type: 'filters/statusFilterChange',
        payload: value
    }
}

export const priorityFillter = (priority) => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priority
    }
}