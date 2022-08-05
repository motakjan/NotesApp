import { Box } from '@mui/material';
import { useState } from 'react';
import { DashboardActions } from './DashboardActions/DashboardActions';
import { DashboardInfo } from './DashboardInfo/DashboardInfo';

interface IDashboardHeader {
  title: string;
  description: string;
  boardId: string;
  userCount: number;
}

export const DashboardHeader: React.FC<IDashboardHeader> = ({ title, description, boardId, userCount }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'flex-start', lg: 'center' },
        flexDirection: { xs: 'column', md: 'column', lg: 'row' },
        justifyContent: 'space-between',
        pl: '10px',
      }}
    >
      <DashboardInfo title={title} description={description} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <DashboardActions boardId={boardId} userCount={userCount} />
    </Box>
  );
};
