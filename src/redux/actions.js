import { ACTION } from "../constants"

export const getAllTodos = (data) => {
    return {
        type: ACTION.TYPE.GET,
        payload: data,
    }
}

export const searchTitle = (title) => {
    return {
        type: ACTION.TYPE.SEARCH,
        payload: title,
    }
}

export const getCurrentItems = (data) => {
    return {
        type: ACTION.TYPE.CURRENT,
        payload: data,
    }
}