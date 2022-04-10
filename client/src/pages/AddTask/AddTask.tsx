import { Grid } from '@mui/material';
import { MainBar } from '../../components/AddTask/MainBar/MainBar';
import { RightBar } from '../../components/AddTask/RightBar/RightBar';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

const validationSchema = Yup.object().shape({
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

export const AddTask = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      taskType: '',
      taskTitle: '',
      taskDescription: '',
      taskPriority: '',
      dateFrom: '',
      dateTo: '',
      taskSelectLabel: { value: 'chocolate', label: 'Chocolate' },
      dropzone: [],
    },
  });
  return (
    <Grid container spacing={3} sx={{ backgroundColor: '#f0f0f0', padding: '0 24px 0 12px' }}>
      <Grid item md={9} xs={12}>
        <MainBar control={control} handleSubmit={handleSubmit} errors={errors} />
      </Grid>
      <Grid item md={3} xs={12}>
        <RightBar control={control} />
      </Grid>
    </Grid>
  );
};
