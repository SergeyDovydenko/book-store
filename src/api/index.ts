import axios from "axios";

const API_URL = 'https://api.itbook.store/1.0'

export const client = axios.create({
    baseURL: API_URL,
});