import axios from "axios";
const BASE_URL = import.meta.env.REACT_APP_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

// Attach JWT automatically
api.interceptors.request.use((config): any => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
}, (error) => Promise.reject(error));


// Handling error
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api