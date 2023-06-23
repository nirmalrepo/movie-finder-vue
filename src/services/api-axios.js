import axios from 'axios';
import app from '../main';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_APP_API_KEY,
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
