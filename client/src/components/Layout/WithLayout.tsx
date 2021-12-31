import { Layout } from './Layout';

export const WithLayout = ({ page }: {page: JSX.Element}) => (
    <Layout>
        {page}
    </Layout>
);
