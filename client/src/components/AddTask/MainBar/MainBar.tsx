import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import RSelect from 'react-select';
import styles from './MainBar.module.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ControlledTextField } from '../../UI/ControlledTextField/ControlledTextField';

const colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'orange', label: 'Orange' },
];

const taskTypes = [
  {
    value: 'appointment',
    label: 'Appointment',
  },
  {
    value: 'task',
    label: 'Task',
  },
  {
    value: 'meeting',
    label: 'Meeting',
  },
  {
    value: 'note',
    label: 'Note',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const priorities = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
];

const validationSchema = Yup.object().shape({
  dropzone: Yup.array(),
  taskType: Yup.string().required(),
  taskTitle: Yup.string().required(),
  taskDescription: Yup.string().required(),
  taskPriority: Yup.string().required(),
});

export const MainBar = () => {
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
      taskSelectLabel: colourOptions[0],
      dropzone: [],
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <ShadowedContainer>
      <Typography variant="h5" component="h1">
        Create a new task
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <ControlledTextField label={'Type'} select errors={errors?.taskType} name={'taskType'} control={control}>
          {taskTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </ControlledTextField>
        <ControlledTextField
          label={'Title'}
          errors={errors?.taskTitle}
          name={'taskTitle'}
          InputLabelProps={{ shrink: true }}
          control={control}
        />
        <ControlledTextField
          label={'Description'}
          multiline
          rows={8}
          errors={errors?.taskDescription}
          name={'taskDescription'}
          InputLabelProps={{ shrink: true }}
          control={control}
        />
        <ControlledTextField
          label={'Priority'}
          select
          errors={errors?.taskPriority}
          name={'taskPriority'}
          control={control}
        >
          {priorities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </ControlledTextField>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: '1%' }}>
            <Controller
              name="dateFrom"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <DateTimePicker
                  renderInput={(props: any) => (
                    <TextField sx={{ width: '39.5%' }} size="small" color="secondary" {...props} />
                  )}
                  label="From"
                  {...rest}
                />
              )}
            />
            <Controller
              name="dateTo"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <DateTimePicker
                  renderInput={(props: any) => (
                    <TextField sx={{ width: '39.5%' }} size="small" color="secondary" {...props} />
                  )}
                  label="To"
                  {...rest}
                />
              )}
            />
          </Box>
        </LocalizationProvider>
        {/* consider researching cx option https://react-select.com/styles */}

        <Controller
          name="taskSelectLabel"
          control={control}
          render={({ field }) => (
            <RSelect
              className={styles.multiSelect}
              isMulti
              {...field}
              closeMenuOnSelect={false}
              options={colourOptions}
              hideSelectedOptions={false}
              isSearchable
              classNamePrefix="select"
            />
          )}
        />
        <DropzoneFileInput control={control} name="dropzone" />
        <NappPersonModal buttonText="Open Modal" buttonSx={{ width: '80%' }} />
        <Button sx={{ width: '80%' }} onClick={handleSubmit(onSubmit)} color="secondary" variant="outlined">
          Submit
        </Button>
      </Box>
    </ShadowedContainer>
  );
};
