import { instance } from './api';

export const dashboardApi = {
  getDashboards() {
    return instance.get('/dashboard/').then(res => res.data);
  },
  getDashboardData(id: string) {
    return instance.get(`/dashboard/${id}`).then(res => res.data);
  },
};
