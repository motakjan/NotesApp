import { Avatar, Paper, TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { NappModal } from './NappModal';
import { v4 as uuidv4 } from 'uuid';

interface INappPersonModal {
  buttonText: string;
  buttonSx?: React.CSSProperties;
  buttonSize: 'small' | 'medium' | 'large';
}

const options = [
  'Peter Smith (psmith@gmail.com)',
  'Martin Smith (psmith@gmail.com)',
  'Jan Smith (psmith@gmail.com)',
  'John Smith (psmith@gmail.com)',
  'Lopes Smith (psmith@gmail.com)',
  'Snow Smith (psmith@gmail.com)',
];

export const NappPersonModal: React.FC<INappPersonModal> = ({ buttonText, buttonSx, buttonSize }) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <NappModal buttonText={buttonText} buttonSx={buttonSx} buttonSize={buttonSize}>
      <Paper sx={{ p: '6px' }}>
        <TextField
          placeholder="Search Person"
          variant="filled"
          color="info"
          sx={{ width: '100%' }}
          inputProps={{
            style: {
              height: '12px',
              padding: '10px 12px',
              fontSize: 'smaller',
            },
          }}
          value={value}
          onChange={handleChange}
          focused
        />
      </Paper>

      {options
        .filter(person => person.toLowerCase().includes(debouncedValue.toLowerCase()))
        .map((option: any) => (
          <Paper
            key={`${uuidv4()}-option`}
            sx={{
              display: 'flex',
              backgroundColor: 'background.default',
              p: '0.25rem 0.5rem',
              gap: '10px',
              fontSize: '11.5px',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'background.paper',
              },
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={`https://avatars.dicebear.com/api/big-ears-neutral/${option}.svg`}
              sx={{ width: '1.2rem', height: '1.2rem' }}
            />
            {option}
          </Paper>
        ))}
    </NappModal>
  );
};
