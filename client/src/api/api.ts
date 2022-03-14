import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const configParams = {
    ...config,
  };
  if (!configParams.headers) return null;
  configParams.headers['auth-token'] = localStorage.getItem('auth-token') || '';

  return configParams;
});
