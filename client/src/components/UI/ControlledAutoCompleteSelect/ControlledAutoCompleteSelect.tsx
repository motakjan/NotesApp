import React from 'react';
import { Autocomplete, Chip, createFilterOptions, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const OPTIONS_LIMIT = 5;

export const ControlledAutoCompleteSelect: React.FC<any> = ({
  control,
  filterBy,
  options,
  label,
  disabled = false,
  helperText,
  placeholder,
  name,
  sx,
}) => {
  const defaultFilterOptions = createFilterOptions();
  const filterOptions = (optionsLimited: any, state: any) =>
    defaultFilterOptions(optionsLimited, state).slice(0, OPTIONS_LIMIT);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          onChange={(_, data) => {
            onChange(data);
            return data;
          }}
          id="tags-filled"
          size="small"
          filterOptions={filterOptions}
          options={options}
          getOptionLabel={(option: any) => option[filterBy]}
          disabled={disabled}
          renderTags={(value: readonly any[], getTagProps) =>
            value.map((option: any, index: number) => (
              <Chip variant="outlined" size="small" label={option[filterBy]} {...getTagProps({ index })} />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              sx={{ width: '100%', ...sx }}
              color="secondary"
              variant="outlined"
              size="small"
              label={label || 'tags'}
              helperText={helperText}
              placeholder={!params.InputProps.startAdornment ? placeholder : ''}
              InputLabelProps={{ shrink: true }}
              disabled={disabled}
            />
          )}
          multiple
          freeSolo
          disableCloseOnSelect
        />
      )}
    />
  );
};
