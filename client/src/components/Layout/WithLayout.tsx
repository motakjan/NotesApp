import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { authApi } from '../../api/auth';
import { Loading } from '../../pages/Loading';
import { Layout } from './Layout';
import { AxiosError } from 'axios';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const navigate = useNavigate();
  const { status, isLoading } = useQuery<{ isLoggedIn: boolean; errors: AxiosError }>(
    'isLoggedIn',
    authApi.isLoggedIn,
    {
      retry: false,
    }
  );

  if (status === 'error') {
    navigate('/login');
  }

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <>
      <Layout>{isLoading ? <Loading status={status} /> : page}</Layout>
    </>
  );
};
