import axios from 'axios'

const URL = "https://dummyjson.com/"

const axiosApiInstance = axios.create({
    baseURL: URL,
})

export const apiInstance = {
    post: (url: string , body?: {}) => {
        return new Promise((resolve, reject) => {
            axiosApiInstance.post(url, body)
                .then(resolve)
                .catch((error) => {
                    console.warn(error)
                })
        })
    },
    get: (url: string , params?: {}) => {
        return new Promise((resolve, reject) => {
            axiosApiInstance.get(url, params)
                .then(resolve)
                .catch((error) => {
                    console.warn(error)
                })
        })
    },
}