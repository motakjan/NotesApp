import { instance } from './api';

export const dashboardApi = {
  getUserDashboards() {
    return instance.get('/dashboard/user/').then(res => res.data);
  },
  getDashboardData(id: string) {
    return instance.get(`/dashboard/${id}`).then(res => res.data);
  },
  putDashboardData({ data, id }: any) {
    const newData = {
      tasks: data,
    };
    return instance.put(`/dashboard/${id}`, newData).then(res => res.data);
  },
};
