import * as Yup from 'yup';

export const addTaskSchema = Yup.object().shape({
  dropzone: Yup.array(),
  taskType: Yup.string().required(),
  taskTitle: Yup.string().required(),
  taskDescription: Yup.string().required(),
  taskPriority: Yup.string().required(),
  dateFrom: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .typeError('Please input a valid date'),
  dateTo: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .typeError('Please input a valid date'),
});
