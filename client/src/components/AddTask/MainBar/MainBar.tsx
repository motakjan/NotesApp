import { Box, TextField, Typography } from '@mui/material';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';
import Select from 'react-select';
import styles from './MainBar.module.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState } from 'react';

const colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'orange', label: 'Orange' },
];

export const MainBar = () => {
  const [value, setValue] = useState<Date | null>(new Date());
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
        {/* consider researching cx option https://react-select.com/styles */}
        <Select
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
      </Box>
    </ShadowedContainer>
  );
};
