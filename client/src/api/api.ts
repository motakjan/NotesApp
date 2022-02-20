import axios from 'axios';

export const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'auth-token': localStorage.getItem('auth-token') || '', 
  },
});
