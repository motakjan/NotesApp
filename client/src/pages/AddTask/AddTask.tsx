import { Grid } from '@mui/material';
import { MainBar } from '../../components/AddTask/MainBar/MainBar';
import { RightBar } from '../../components/AddTask/RightBar/RightBar';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ITaskFormValues } from '../../types/AddTask/addTaskTypes';
import { addTaskSchema } from '../../utils/schemas/addTaskSchema';

const DEFAULT_VALUES = {
  taskType: '',
  taskTitle: '',
  taskDescription: '',
  taskPriority: '',
  dateFrom: '',
  dateTo: '',
  isPrivate: false,
  taskSelectLabel: {},
  dropzone: [],
};

export const AddTask = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITaskFormValues>({
    resolver: yupResolver(addTaskSchema),
    defaultValues: DEFAULT_VALUES,
  });

  return (
    <Grid container spacing={3} sx={{ backgroundColor: 'background.paper', padding: '0 24px 0 12px' }}>
      <Grid item md={9} xs={12}>
        <MainBar control={control} handleSubmit={handleSubmit} errors={errors} reset={reset} />
      </Grid>
      <Grid item md={3} xs={12}>
        <RightBar control={control} />
      </Grid>
    </Grid>
  );
};
