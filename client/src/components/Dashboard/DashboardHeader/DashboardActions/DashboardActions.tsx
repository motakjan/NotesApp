import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router';

interface IDashboardActions {
  boardId: string;
  userCount: number;
}

export const DashboardActions: React.FC<IDashboardActions> = ({ boardId, userCount }) => {
  const matches = useMediaQuery('(min-width:800px)');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/add_task/${boardId}`);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Typography>last update by</Typography>
        <Avatar sx={{ bgcolor: deepOrange[500], width: '1.8rem', height: '1.8rem' }}>JM</Avatar>
      </Box>
      <Button sx={{ textTransform: 'none' }} startIcon={<PersonAddIcon />}>
        Invite / {userCount}
      </Button>
      <Button sx={{ textTransform: 'none' }} startIcon={<TimelineIcon />}>
        Activity
      </Button>
      <Button sx={{ textTransform: 'none' }} variant="outlined" color="secondary" onClick={handleNavigate}>
        <AddIcon />
        {matches && 'Create Task'}
      </Button>
      <IconButton aria-label="more actions" component="span">
        <MoreHorizIcon />
      </IconButton>
    </Box>
  );
};
