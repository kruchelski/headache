import axios from 'axios';

export const gitlab = axios.create({
    baseURL: 'http://192.168.18.36:3002',
});

export const setDefaultHeaders = (header, value) => {
    gitlab.defaults.headers[header] = value
}

export const removeDefaultHeader = (header) => {
    delete gitlab.defaults.headers[header];
}