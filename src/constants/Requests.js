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
    url: '/users',
    method: 'get',
    body: null,
    params: null,
    query: {
      active: true,
      username: null
    },
    headers: null
  }
}