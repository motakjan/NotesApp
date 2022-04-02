import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const DashboardActions = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Typography>last update by</Typography>
      <Avatar sx={{ bgcolor: deepOrange[500], width: '1.8rem', height: '1.8rem' }}>JM</Avatar>
    </Box>
    <Button sx={{ textTransform: 'none' }} startIcon={<PersonAddIcon />}>
      Invite / 0
    </Button>
    <Button sx={{ textTransform: 'none' }} startIcon={<TimelineIcon />}>
      Activity
    </Button>
    <Button sx={{ textTransform: 'none' }} variant="outlined" color="secondary" startIcon={<AddIcon />}>
      Create Task
    </Button>
    <IconButton aria-label="more actions" component="span">
      <MoreHorizIcon />
    </IconButton>
  </Box>
);
