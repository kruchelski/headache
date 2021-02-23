import axios from 'axios';

export const gitlab = axios.create({
    baseURL: 'https://gitlab.tadsufpr.net.br',
});

export const setDefaultHeaders = (header, value) => {
    gitlab.defaults.headers[header] = value
}

export const removeDefaultHeader = (header) => {
    delete gitlab.defaults.headers[header];
}