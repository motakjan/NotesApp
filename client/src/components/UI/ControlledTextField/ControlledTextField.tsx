import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';

export const ControlledTextField: React.FC<any> = ({
  control,
  name,
  children,
  helperTextMessage,
  errors,
  sx,
  required = false,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        {...props}
        error={!!errors}
        helperText={errors?.message || helperTextMessage}
        sx={{ width: '100%', ...sx }}
        variant="outlined"
        required={required}
        color="secondary"
        size="small"
      >
        {children}
      </TextField>
    )}
  />
);
