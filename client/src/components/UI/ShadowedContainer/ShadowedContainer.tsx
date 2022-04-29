import Box from '@mui/material/Box';
import React from 'react';
import { SxProps } from '@mui/system';
import { Paper } from '@mui/material';

interface IShadowedContainer {
  children: React.ReactNode;
  sx?: SxProps;
}

export const ShadowedContainer: React.FC<IShadowedContainer> = ({ children, sx }) => (
  <Paper
    sx={{
      backgroundColor: 'custom.addTaskCard',
      width: '100%',
      minHeight: 'calc(100vh - 64px)',
      p: '1rem',
      ...sx,
    }}
    elevation={3}
  >
    {children}
  </Paper>
);
