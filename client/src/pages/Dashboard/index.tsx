import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { dashboardApi } from '../../api/dashboard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';
import { IDashboard } from '../../types/Dashboard';
import { useNavigate } from 'react-router';
import { Loading } from '../Loading';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data: boards, status } = useQuery<IDashboard[] | undefined, Error>(
    'dashboards-initial',
    dashboardApi.getDashboards
  );

  if (status === 'loading') {
    return <Loading status={status} />;
  }

  if (status === 'error') {
    navigate('/not_found');
  }

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TaskBoardTabsWrapper boards={boards} />
    </Box>
  );
};
