import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '73aa9dc0dbf14133bd88c31c83755131'
    }
})