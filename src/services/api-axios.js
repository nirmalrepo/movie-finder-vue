import axios from 'axios';
const API_KEY = '136d55d9c6878da748d19b6aa4870c86';
import app from '../main';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    },
});

instance.interceptors.request.use((config) => {
    app.config.globalProperties.$Progress.start();
    return config;
});

instance.interceptors.response.use((response) => {
    app.config.globalProperties.$Progress.finish();
    return response;
});

export default instance;
