import axiosClient from "./axiosClient";

export const getAllTasks = async () => {
    const { data } = await axiosClient.get('tasks', {
        params: {
            _sort: 'id',
            _order: 'desc'
        }
    })
    return data;
}

export const createNewTask = async (todo) => {
    await axiosClient.post('tasks', {...todo})
}

export const deleteTask = async (id) => {
    await axiosClient.delete(`tasks/${id}`)
}

export const updateTask = async (id, todo) => {
    await axiosClient.put(`tasks/${id}`, {...todo})
}