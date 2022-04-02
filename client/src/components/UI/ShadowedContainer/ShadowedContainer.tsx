import { Box } from '@mui/material';
import React from 'react';
import { SxProps } from '@mui/system';

interface IShadowedContainer {
  children: React.ReactNode;
  sx?: SxProps;
}

export const ShadowedContainer: React.FC<IShadowedContainer> = ({ children, sx }) => (
  <Box
    sx={{
      backgroundColor: '#ffffff',
      boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
      width: '100%',
      minHeight: '88vh',
      p: '1rem',
      ...sx,
    }}
  >
    {children}
  </Box>
);
