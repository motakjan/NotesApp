import { instance } from './api';

export const dashboardApi = {
  getDashboards() {
    return instance.get('/dashboard/').then(res => res.data);
  },
};
