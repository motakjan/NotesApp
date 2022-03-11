import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { authApi } from '../../api/auth';
import { Loading } from '../../pages/Loading/Loading';
import { Layout } from './Layout';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const { status } = useQuery<any>('isLoggedIn', authApi.isLoggedIn, {
    retry: false,
  });
  const navigate = useNavigate();

  if (status === 'error') {
    navigate('/login');
  }

  return (
    <>
      <Layout>
        {status === 'loading' ? <Loading status={status} /> : page}
      </Layout>
    </>
  );
};
