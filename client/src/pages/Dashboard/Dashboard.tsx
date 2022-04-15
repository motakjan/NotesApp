import { Box } from '@mui/material';
import { FilterOptions } from '../../components/Dashboard/FilterOptions/FilterOptions';
import { TaskBoard } from '../../components/Dashboard/TaskBoard/TaskBoard';

export const Dashboard = () => (
  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
    <FilterOptions />
    <TaskBoard />
  </Box>
);
