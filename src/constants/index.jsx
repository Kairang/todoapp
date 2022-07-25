export const ROUTES = {
    ALL_TASK: {
        path: '/all-task',
        exact: true,
        name: 'All Task'
    },
    NEW_TASK: {
        path: '/new-task',
        exact: true,
        name: 'New Task'
    },
    DOING_TASK: {
        path: '/doing-task',
        exact: true,
        name: 'Doing Task'
    },
    DONE_TASK: {
        path: '/done-task',
        exact: true,
        name: 'Done Task'
    },
    CREATE_TASK: {
        path: '/create-task',
        exact: true,
        name: 'Create New Task'
    },
    EDIT_TASK: {
        path: '/edit-task',
        exact: false,
        name: ''
    },
    SEARCH: {
        path: '/search-title',
        exact: false,
        name: ''
    }
}

export const ACTION = {
    TYPE: {
        GET: 'todoList/getAllTodos',
        SEARCH: 'todoList/search',
        CURRENT: 'todoList/getCurrentItems',
    },
}