import { gitlab } from '../configs';
import { ENDPOINTS } from '../constants';

export const makeRequest = async (
  endpoint, 
  requestBody = null, 
  params = null, 
  query = null
) => {

  try {
    
    // Retrieves the information about the request
    const requestInfo = ENDPOINTS[endpoint];

    // Gets the client for the request
    const client = _getRequestFunction[requestInfo.method];

    // Gets the URL
    let url = requestInfo.url;

    // If there's params, add to the url
    if (requestInfo.params && requestInfo.params.length) {
      for (const value of requestInfo.params) {
        url = url.replace(`@${value}`, params[value]);
      }
    }

    // Sets custom headers
    let headers = null;
    if (requestInfo.headers) {
      headers = requestInfo.headers;
    }

    // Sets body
    let body = null;
    if (requestInfo.body) {
      body = requestBody;
    }

    // Sets query params
    if (requestInfo.query) {
      let i = 0;
      for (const key in requestInfo.query) {
        if ((query?.[key] !== null && query?.[key] !== undefined) || 
        (requestInfo.query[key] !== null)) {
          if (i === 0) {
            url = `${url}?`;
          }
          if (i !== 0) {
            url = `${url}&`;
          }
          url = `${url}${key}=${query?.[key] || requestInfo.query[key]}`;
        }
        i++;
      }
    }

    // Makes the request
    return await client(url, body, headers);
  } catch (err) {
    const status = err?.response?.status || 'Outro Status';
    const msg = err?.response?.data?.error_description ||
      err?.error || 
      err?.message ||
      err?.response?.data?.error || 
      `Unexpected request error - ${endpoint}`;

    throw new Error(`[${status}] ${msg}`);
  }
}

const _getRequestFunction = {
  get: gitlab.get,
  post: gitlab.post,
  put: gitlab.put,
  delete: gitlab.delete
}