import { useNavigate } from 'react-router';
import { Loading } from '../../pages/Loading/Loading';
import { Layout } from './Layout';
import { LoggedUserContextProvider, useLoggedUser } from '../../context/LoggedUserContext';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const navigate = useNavigate();
  const { status, isLoading, isLoggedIn } = useLoggedUser();

  if (status === 'error') {
    navigate('/login');
  }

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <LoggedUserContextProvider>
      <Layout>{isLoading ? <Loading status={status || 'loading'} /> : page}</Layout>
    </LoggedUserContextProvider>
  );
};
