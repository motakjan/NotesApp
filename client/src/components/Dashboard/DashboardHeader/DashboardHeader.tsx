import { Box } from '@mui/material';
import { DashboardInfo } from './DashboardInfo/DashboardInfo';
import { useState } from 'react';
import { DashboardActions } from './DashboardActions/DashboardActions';

interface IDashboardHeader {
  title: string;
  description: string;
}

export const DashboardHeader: React.FC<IDashboardHeader> = ({ title, description }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: '10px' }}>
      <DashboardInfo title={title} description={description} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <DashboardActions />
    </Box>
  );
};
