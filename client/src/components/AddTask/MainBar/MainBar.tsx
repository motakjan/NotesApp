import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import RSelect from 'react-select';
import styles from './MainBar.module.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';

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

export const MainBar = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [taskType, setTaskType] = useState('task');
  const [priority, setPriority] = useState('1');

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskType(event.target.value);
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskType(event.target.value);
  };

  return (
    <ShadowedContainer>
      <Typography variant="h5" component="h1">
        Create a new task
      </Typography>
      <Box
        component="form"
        onSubmit={() => console.log('yo')}
        noValidate
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <TextField
          select
          label="Type"
          value={taskType}
          onChange={handleTypeChange}
          variant="outlined"
          color="secondary"
          sx={{ width: '80%' }}
          size="small"
        >
          {taskTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          InputLabelProps={{ shrink: true }}
          id="title"
          label="Title"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ width: '80%' }}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          id="description"
          label="Description"
          multiline
          rows={8}
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ width: '80%' }}
        />
        <TextField
          select
          label="Priority"
          value={priority}
          onChange={handlePriorityChange}
          variant="outlined"
          color="secondary"
          sx={{ width: '80%' }}
          size="small"
        >
          {priorities.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', gap: '1%' }}>
            <DateTimePicker
              renderInput={(props: any) => (
                <TextField sx={{ width: '39.5%' }} size="small" color="secondary" {...props} />
              )}
              label="From"
              value={value}
              onChange={(newValue: any) => {
                setValue(newValue);
              }}
            />
            <DateTimePicker
              renderInput={(props: any) => (
                <TextField sx={{ width: '39.5%' }} size="small" color="secondary" {...props} />
              )}
              label="To"
              value={value}
              onChange={(newValue: any) => {
                setValue(newValue);
              }}
            />
          </Box>
        </LocalizationProvider>
        {/* consider researching cx option https://react-select.com/styles */}
        <RSelect
          defaultValue={[colourOptions[2], colourOptions[3]]}
          className={styles.multiSelect}
          isMulti
          name="colors"
          closeMenuOnSelect={false}
          options={colourOptions}
          hideSelectedOptions={false}
          isSearchable
          classNamePrefix="select"
        />
        <NappPersonModal buttonText="Open Modal" buttonSx={{ width: '80%' }} />
      </Box>
    </ShadowedContainer>
  );
};
