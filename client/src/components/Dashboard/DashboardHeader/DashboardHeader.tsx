import { Box } from '@mui/material';
import { DashboardInfo } from './DashboardInfo/DashboardInfo';
import { useState } from 'react';

export const DashboardHeader = () => {
  const text = 'Task Board';
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <Box>
      <DashboardInfo
        title="Task Board"
        description="Add Task Board description"
        isFavourite={isFavourite}
        setIsFavourite={setIsFavourite}
      />
    </Box>
  );
};
