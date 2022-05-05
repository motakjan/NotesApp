import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { authApi } from '../../api/auth';
import { Loading } from '../../pages/Loading/Loading';
import { Layout } from './Layout';
import { AxiosError } from 'axios';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const { status } = useQuery<{ isLoggedIn: boolean; errors: AxiosError }>('isLoggedIn', authApi.isLoggedIn, {
    retry: false,
  });
  const navigate = useNavigate();

  if (status === 'error') {
    navigate('/login');
  }

  if (status === 'loading') {
    return <Loading status={status} />;
  }

  return (
    <>
      <Layout>{status === 'loading' ? <Loading status={status} /> : page}</Layout>
    </>
  );
};
