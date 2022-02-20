import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { authApi } from '../../api/auth';
import { Layout } from './Layout';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const { status } = useQuery<any>('isLoggedIn', authApi.isLoggedIn, {
    retry: false,
  });
  const navigate = useNavigate();

  if (status === 'error') {
    navigate('/login');
  }

  if (status === 'loading') {
    return <div><h1>LOADING ...</h1></div>
  }

  return (
    <Layout>
      {page}
    </Layout>
  );
};
