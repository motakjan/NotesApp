import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line func-names
instance.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('auth-token') || '';
  config.headers['auth-token'] = token;

  return config;
});
