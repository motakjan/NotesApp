import { Control } from 'react-hook-form';
import { ITask } from '../Dashboard/dashboardTypes';

export interface IAddDashboardFormValues {
  title: string;
  description: string;
  users: string[];
  tasks?: ITask[];
}

// eslint-disable-next-line import/export
export interface IAddDashboard {
  control: Control<IAddDashboardFormValues>;
  handleSubmit: any;
  errors: any;
  reset: any;
}
