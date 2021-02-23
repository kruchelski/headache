import { gitlab } from '../configs';
import { ENDPOINTS } from '../constants';

export const makeRequest = async (endpoint, requestBody = null, params = null) => {

  try {

    // Retrieves the information about the request
    const requestInfo = ENDPOINTS[endpoint];

    // Gets the client for the request
    const client = _getRequestFunction[requestInfo.type];

    // Gets the URL
    let url = requestInfo.url;

    // If there's params, add to the url
    if (requestInfo.params) {
      url = `${url}/${params}`;
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

    // Makes the request
    return await client(url, body, headers);
  } catch (err) {

    const status = err?.response?.status || 'Outro Status';
    const msg = err?.response?.data || err?.error || err?.message ||
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