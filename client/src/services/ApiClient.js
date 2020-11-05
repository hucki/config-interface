// provide access to the API
const API_URL = 'http://localhost';
const API_PORT = 3001;
const API_PREFIX = '';

export const apiClient = (endpoint, {data, ...options}) => {
  const headers = new Headers();
  if (data) headers.append('Content-Type', 'application/json');

  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers,
    ...options
  };

  const request = new Request(encodeURI(`${API_URL}:${API_PORT}/${API_PREFIX !== '' ? API_PREFIX + '/' : ''}${endpoint}`), config);

  return window.fetch(request).then(async (response) => {
    try {
      const data = await response.json();
      if(response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  })
}