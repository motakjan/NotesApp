import { DashboardHeader } from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import { Box } from '@mui/material';
import { FilterOptions } from '../../components/Dashboard/FilterOptions/FilterOptions';
import { TaskBoard } from '../../components/Dashboard/TaskBoard/TaskBoard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';

const BOARDS = [
  { id: 1, component: <TaskBoard />, name: 'Main Dashboard' },
  { id: 2, component: <TaskBoard />, name: 'Secondary Dashboard' },
];

export const Dashboard = () => (
  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
    <DashboardHeader />
    <FilterOptions />
    <TaskBoardTabsWrapper boards={BOARDS} />
  </Box>
);
