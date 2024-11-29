
import axios from 'axios';

const token = localStorage.getItem('token');

const apiImage = axios.create({
    baseURL: `${process.env.REACT_APP_PANEL_WEBSITE}/api`,
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
    }
});

apiImage.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiImage.interceptors.response.use(
    response => response,
    error => {
        console.error("API error:", error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);

export default apiImage;