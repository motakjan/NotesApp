import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { dashboardApi } from '../../api/dashboard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';
import { IDashboard } from '../../types/Dashboard/dashboardTypes';
import { Loading } from '../Loading/Loading';

export const Dashboard = () => {
  const { data: boards, status } = useQuery<IDashboard[] | undefined, Error>(
    'dashboards-initial',
    dashboardApi.getUserDashboards
  );

  if (status === 'loading') {
    return <Loading status={status} />;
  }

  if (status === 'error') {
    return <div>Error here...</div>;
  }

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TaskBoardTabsWrapper boards={boards} />
    </Box>
  );
};
