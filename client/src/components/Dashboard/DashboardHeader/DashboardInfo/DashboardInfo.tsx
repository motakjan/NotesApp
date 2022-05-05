import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { StarButton } from '../../../UI/StarButton/StarButton';

interface IDashboardInfo {
  title: string;
  description: string;
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
}

export const DashboardInfo: React.FC<IDashboardInfo> = ({ title, description, isFavorite, setIsFavorite }) => {
  const handleStarClicked = () => setIsFavorite((prevState: boolean) => !prevState);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
          {title}
        </Typography>
        <StarButton onClick={handleStarClicked} isFavorite={isFavorite} />
      </Box>

      {/* TODO Choose theme color */}
      <Typography component="p" variant="body2" sx={{ color: '#7c7c7c', ml: '3px' }}>
        {description}
      </Typography>
    </Box>
  );
};
