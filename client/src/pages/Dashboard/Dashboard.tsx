import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { dashboardApi } from '../../api/dashboard';
import { TaskBoard } from '../../components/Dashboard/TaskBoard/TaskBoard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';

const BOARDS = [
  { id: 1, component: <TaskBoard />, name: 'Main Dashboard', description: 'Custom description for Main Dashboard' },
  {
    id: 2,
    component: <TaskBoard />,
    name: 'Secondary Dashboard',
    description: 'Super description for Secondary Dashboard',
  },
  {
    id: 3,
    component: <TaskBoard />,
    name: 'Ternary Dashboard',
    description: 'Custom description for Ternary Dashboard',
  },
];

export const Dashboard = () => {
  const { data: boards, status } = useQuery<any[], Error>('groups', dashboardApi.getDashboards);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TaskBoardTabsWrapper boards={boards} />
    </Box>
  );
};
