import { Box, Breadcrumbs, Button, Link, MenuItem, TextField, Typography } from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import RSelect from 'react-select';
import styles from './MainBar.module.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { Controller, Control, SubmitHandler } from 'react-hook-form';
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

interface IMainBar {
  control: Control<any>;
  handleSubmit: any;
  errors: any;
}

export const MainBar: React.FC<IMainBar> = ({ control, handleSubmit, errors }) => {
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
        <ControlledTextField label="Type" select errors={errors?.taskType} name="taskType" control={control}>
          {taskTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </ControlledTextField>
        <ControlledTextField
          label="Title"
          errors={errors?.taskTitle}
          name="taskTitle"
          InputLabelProps={{ shrink: true }}
          control={control}
        />
        <ControlledTextField
          label="Description"
          multiline
          rows={8}
          errors={errors?.taskDescription}
          name="taskDescription"
          InputLabelProps={{ shrink: true }}
          control={control}
        />
        <ControlledTextField
          label="Priority"
          select
          errors={errors?.taskPriority}
          name="taskPriority"
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
                    <TextField
                      {...props}
                      sx={{ width: '39.5%' }}
                      size="small"
                      color="secondary"
                      error={!!errors.dateFrom}
                      helperText={errors?.dateFrom?.message}
                    />
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
                    <TextField
                      {...props}
                      sx={{ width: '39.5%' }}
                      size="small"
                      color="secondary"
                      error={!!errors.dateTo}
                      helperText={errors?.dateTo?.message}
                    />
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
        <NappPersonModal buttonText="Open Modal" buttonSx={{ width: '80%' }} />
        <Button sx={{ width: '80%' }} onClick={handleSubmit(onSubmit)} color="error" variant="contained">
          Submit
        </Button>
      </Box>
    </ShadowedContainer>
  );
};
