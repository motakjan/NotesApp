import { instance } from './api';
import { LoginDataType } from '../types/authTypes';

export const authApi = {
  loginUser(data: LoginDataType) {
    return instance.post('/auth/login', data).then(res => res.data);
  },
  isLoggedIn() {
    return instance.get('/auth/isLoggedIn').then(res => res.data);
  },
  googleLoginUser(data: LoginDataType) {
    return instance.post('/auth/googleLogin', data).then(res => res.data);
  },
};
