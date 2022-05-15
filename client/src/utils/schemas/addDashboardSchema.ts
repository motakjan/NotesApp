import * as Yup from 'yup';

export const addDashboardSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  users: Yup.array().min(1, 'At least one user is required').required(),
});
