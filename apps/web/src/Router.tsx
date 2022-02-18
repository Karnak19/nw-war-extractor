import {
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router as LocRouter,
} from 'react-location';

import Layout from './components/Layout';
import { client } from './graphql';
import Companies from './pages/Companies';
import Company from './pages/Company';
import Home from './pages/Home';
import { getSdk } from './routes/generated';

const location = new ReactLocation();

const sdk = getSdk(client);

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'companies',
    children: [
      {
        path: '/',
        element: <Companies />,
        loader: async () => {
          const { companies } = await sdk.companies();

          return {
            companies,
          };
        },
      },
      {
        path: ':id',
        element: <Company />,
      },
    ],
  },
];

function Router() {
  return (
    <LocRouter location={location} routes={routes}>
      <Layout>
        <Outlet />
      </Layout>
    </LocRouter>
  );
}

export default Router;
