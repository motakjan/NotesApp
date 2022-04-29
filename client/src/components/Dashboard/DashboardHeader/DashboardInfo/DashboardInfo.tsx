import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { StarButton } from '../../../UI/StarButton/StarButton';

interface IDashboardInfo {
  title: string;
  description: string;
  isFavourite: boolean;
  setIsFavourite: Dispatch<SetStateAction<boolean>>;
}

export const DashboardInfo: React.FC<IDashboardInfo> = ({ title, description, isFavourite, setIsFavourite }) => {
  const handleStarClicked = () => setIsFavourite((prevState: boolean) => !prevState);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: '600' }}>
          {title}
        </Typography>
        <StarButton onClick={handleStarClicked} isFavourite={isFavourite} />
      </Box>

      {/* TODO Choose theme color */}
      <Typography component="p" variant="body2" sx={{ color: '#7c7c7c', ml: '6px' }}>
        {description}
      </Typography>
    </Box>
  );
};
