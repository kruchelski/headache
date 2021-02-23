const apiPrefix = '/api/v4';

export const ENDPOINTS = {

  login: {
    url: '/oauth/token',
    method: 'post',
    body: true,
    params: null,
    query: null,
    headers: {
      'Content-Type': 'application/json'
    }
  },

  getUserInfo: {
    url: `${apiPrefix}/user`,
    method: 'get',
    body: null,
    params: null,
    query: null,
    headers: null
  }
}