import { Loading } from '../../pages/Loading/Loading';
import { Layout } from './Layout';
import { LoggedUserContextProvider, useLoggedUser } from '../../context/LoggedUserContext';

export const WithLayout = ({ page }: { page: JSX.Element }) => {
  const { status, isLoading } = useLoggedUser();

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <LoggedUserContextProvider>
      <Layout>{isLoading ? <Loading status={status || 'loading'} /> : page}</Layout>
    </LoggedUserContextProvider>
  );
};
