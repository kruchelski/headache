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
  },

  getAllProjects: {
    url: `${apiPrefix}/projects`,
    method: 'get',
    body: null,
    params: null,
    query: {
      simple: 'true',
      statistics: 'true',
      owned: 'true',
      membership: 'true'
    },
    headers: null
  },
  
  getCommits: {
    url: `${apiPrefix}/projects/@projectId/repository/commits`,
    method: 'get',
    body: null,
    params: ['projectId'],
    query: null,
    headers: null,
  },

  getGroups: {
    url: `${apiPrefix}/groups`,
    method: 'get',
    body: null,
    params: null,
    query: null,
    headers: null,
  }
}