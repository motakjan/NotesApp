import { Divider, Typography } from '@mui/material';
import React from 'react';
import { IRightBarCard } from '../../../../types/AddTask/addTaskTypes';
import { ShadowedContainer } from '../../../UI/ShadowedContainer/ShadowedContainer';

export const RightBarCard: React.FC<IRightBarCard> = ({ title, children }) => (
  <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2, maxHeight: '30rem', overflow: 'auto' }}>
    <Typography component="h2" variant="subtitle1">
      {title}
    </Typography>
    <Divider />
    {children}
  </ShadowedContainer>
);
