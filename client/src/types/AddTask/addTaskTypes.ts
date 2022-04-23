import { Control } from 'react-hook-form';

export interface ITaskFormValues {
  taskType: string;
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;
  dateFrom: string;
  dateTo: string;
  isPrivate: boolean;
  taskSelectLabel: {};
  dropzone?: never[];
}

export interface IMainBar {
  control: Control<ITaskFormValues>;
  handleSubmit: any;
  errors: any;
  reset: any;
}

export interface IRightBar {
  control: Control<ITaskFormValues>;
}

export interface IRightBarCard {
  title: string;
  children: React.ReactNode;
}
