import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { dashboardApi } from '../../api/dashboard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';
import { IDashboard } from '../../types/Dashboard';

export const Dashboard = () => {
  const { data: boards, status } = useQuery<IDashboard[] | undefined, Error>('groups', dashboardApi.getDashboards);

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
