import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BE_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => (new URLSearchParams(params).toString())
})

export default axiosClient;