import axios from "axios"

const AxiosAgent = {}

AxiosAgent.fetcher = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
})

Object.freeze(AxiosAgent)
export default AxiosAgent
