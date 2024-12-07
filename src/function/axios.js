import axios from "axios";

const apiJson = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_WEBSITE}/api`,
    timeout: 10000,
    mode: "cors",
    headers: {
        'Content-Type': 'application/json',
    }
});

apiJson.interceptors.response.use(
    response => response,
    error => {
        console.error("API error : ", error);
        return Promise.reject(error);
    }
);

export default apiJson;
