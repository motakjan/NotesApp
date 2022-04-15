import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import RSelect from 'react-select';
import styles from './MainBar.module.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Controller, Control, SubmitHandler } from 'react-hook-form';
import { ControlledTextField } from '../../UI/ControlledTextField/ControlledTextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';

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
  reset: any;
}

export const MainBar: React.FC<IMainBar> = ({ control, handleSubmit, errors, reset }) => {
  const onSubmit = (data: any) => console.log(data);
  return (
    <ShadowedContainer>
      <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
        Create Task
      </Typography>
      <Typography component="p" variant="body2" sx={{ color: '#7c7c7c', ml: '6px' }}>
        Creating a task for dashboard: TaskBoard
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
                      sx={{ width: '49.5%' }}
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
                      sx={{ width: '49.5%' }}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end' }}>
          <Button
            sx={{ width: '25%' }}
            onClick={() => reset()}
            color="secondary"
            variant="contained"
            endIcon={<DeleteSweepRoundedIcon />}
          >
            Clear
          </Button>
          <Button
            sx={{ width: '25%', color: 'text.dark' }}
            onClick={handleSubmit(onSubmit)}
            color="primary"
            variant="contained"
            endIcon={<SendRoundedIcon />}
          >
            Create
          </Button>
        </Box>
      </Box>
    </ShadowedContainer>
  );
};
