import { Avatar, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NappModal } from './NappModal';

interface INappPersonModal {
  buttonText: string;
  buttonSx?: React.CSSProperties;
}

const options = [1, 5, 54, 84, 8, 4, 684, 6, 4, 564, 5, 4, 8, 9];

export const NappPersonModal: React.FC<INappPersonModal> = ({ buttonText, buttonSx }) => (
  <NappModal buttonText={buttonText} buttonSx={buttonSx}>
    <TextField placeholder="Search Person" color="secondary" sx={{ width: '100%' }} size="small" focused />
    {options.map((option: any) => (
      <Box
        key={`${option}-option`}
        sx={{ display: 'flex', backgroundColor: '#f5f5f5', p: '0.2rem 0.4rem', gap: '10px', fontSize: '14px' }}
      >
        <Avatar alt="Remy Sharp" src={`https://avatars.dicebear.com/api/initials/option${option}.svg`} /> option{' '}
        {option}
      </Box>
    ))}
  </NappModal>
);
