import { instance } from './api';
import { LoginDataType } from '../types/authTypes';

export const authApi = {
  loginUser(data: LoginDataType) {
    return instance.post('/auth/login', data).then(res => res.data);
  },
  // TODO FINISH REGISTER USER API CALL
  /* registerUser(data: any) {
    return instance.post('/auth/register', data).then(res => res.data);
  }, */

  isLoggedIn() {
    return instance.get('/auth/isLoggedIn').then(res => res.data);
  },
};
