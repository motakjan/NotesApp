import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Controller } from 'react-hook-form';
import { ControlledTextField } from '../../UI/ControlledTextField/ControlledTextField';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import { IMainBar } from '../../../types/AddTask/addTaskTypes';
import { ControlledAutoCompleteSelect } from '../../UI/ControlledAutoCompleteSelect/ControlledAutoCompleteSelect';

const colourOptions = [
  { id: 1, name: 'Chocolate' },
  { id: 2, name: 'Strawberry' },
  { id: 3, name: 'Vanilla' },
  { id: 4, name: 'Coffee' },
  { id: 5, name: 'Orange' },
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
        <ControlledTextField
          label="Type"
          errors={errors?.taskType}
          name="taskType"
          control={control}
          InputLabelProps={{ shrink: true }}
          helperTextMessage="Select a task type that represents your task"
          select
        >
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
          helperTextMessage="Input title that describes your task"
        />
        <ControlledTextField
          label="Description"
          multiline
          rows={8}
          errors={errors?.taskDescription}
          name="taskDescription"
          InputLabelProps={{ shrink: true }}
          control={control}
          helperTextMessage="Input description that describes your task"
        />
        <ControlledAutoCompleteSelect
          control={control}
          filterBy="name"
          options={colourOptions}
          name="taskSelectLabel"
          helperText="Select tags that match your task"
          placeholder="Please choose tags describing your task"
        />
        <Controller
          name="taskSelectLabel"
          control={control}
          render={({ field: { onChange } }) => (
            <Autocomplete
              onChange={(_, data) => {
                onChange(data);
                return data;
              }}
              id="tags-filled"
              size="small"
              options={colourOptions}
              getOptionLabel={option => option.name}
              renderTags={(value: readonly any[], getTagProps) =>
                value.map((option: any, index: number) => (
                  <Chip variant="outlined" size="small" label={option.name} {...getTagProps({ index })} />
                ))
              }
              renderInput={params => (
                <TextField
                  {...params}
                  color="secondary"
                  variant="outlined"
                  size="small"
                  label="Tags"
                  helperText="Select tags that match your task"
                  placeholder="Please choose tags describing your task"
                  InputLabelProps={{ shrink: true }}
                />
              )}
              multiple
              freeSolo
              disableCloseOnSelect
            />
          )}
        />
        <ControlledTextField
          label="Priority"
          select
          InputLabelProps={{ shrink: true }}
          errors={errors?.taskPriority}
          name="taskPriority"
          helperTextMessage="Select a task priority"
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
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dateFrom}
                      helperText={errors?.dateFrom?.message || 'Select task start date and time'}
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
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.dateTo}
                      helperText={errors?.dateTo?.message || 'Select task end date and time'}
                    />
                  )}
                  label="To"
                  {...rest}
                />
              )}
            />
          </Box>
        </LocalizationProvider>
        <FormControlLabel
          value="start"
          control={
            <Controller
              name="isPrivate"
              control={control}
              render={({ field: { ref, ...rest } }) => <Switch color="secondary" {...rest} />}
            />
          }
          label="Private"
          labelPlacement="start"
          sx={{ marginRight: 'auto', marginLeft: '5px' }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: { md: 'flex-end', xs: 'space-between', xl: 'flex-end' },
          }}
        >
          <Button
            sx={{ width: { xl: '25%', md: '25%', xs: '48%' } }}
            onClick={() => reset()}
            color="secondary"
            variant="contained"
            endIcon={<DeleteSweepRoundedIcon />}
          >
            Clear
          </Button>
          <Button
            sx={{ width: { xl: '25%', md: '25%', xs: '48%' }, color: 'text.dark' }}
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
