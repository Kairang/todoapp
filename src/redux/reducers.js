import { ACTION } from "../constants";

const initValue = {
    todoList: [],
    search: '',
    currentItems: [],
}

const rootReducer = ( state = initValue , action) => {
    switch (action.type) {
        case ACTION.TYPE.GET:
            return {
                ...state,
                todoList: [...action.payload]
            }
        case ACTION.TYPE.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case ACTION.TYPE.CURRENT:
            {
                return {
                    ...state,
                    currentItems: action.payload
                }
            }
        default:
            return state;
    }
}

export default rootReducer;