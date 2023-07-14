import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    baseURL: "http://143.198.72.61/api"
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        localStorage.setItem('token', token);
    } else {
        delete api.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
    }
};
export default api;