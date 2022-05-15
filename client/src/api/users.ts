import { instance } from './api';

export const usersApi = {
  getUsersNapp() {
    return instance.get('/user').then(res => res.data);
  },
};
