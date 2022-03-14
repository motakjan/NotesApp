import { Box } from '@mui/material';
import { DashboardInfo } from './DashboardInfo/DashboardInfo';
import { useState } from 'react';
import { DashboardActions } from './DashboardActions/DashboardActions';

export const DashboardHeader = () => {
  const text = 'Task Board';
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <DashboardInfo
        title="Task Board"
        description="Add Task Board description"
        isFavourite={isFavourite}
        setIsFavourite={setIsFavourite}
      />
      <DashboardActions />
    </Box>
  );
};
