import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';

export const ControlledTextField: React.FC<any> = ({ control, name, children, errors, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        {...props}
        error={!!errors}
        helperText={errors?.message}
        sx={{ width: '100%' }}
        variant="outlined"
        color="secondary"
        size="small"
      >
        {children}
      </TextField>
    )}
  />
);
