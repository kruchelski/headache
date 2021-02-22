export const ENDPOINTS = {
  login: {
    url: '/oauth/token',
    method: 'post',
    body: true,
    params: false,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}