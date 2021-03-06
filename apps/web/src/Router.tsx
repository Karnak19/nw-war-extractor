import {
  Outlet,
  ReactLocation,
  Route,
  Router as LocRouter,
} from 'react-location';

import Layout from './components/Layout';
import Companies from './pages/Companies';
import Company from './pages/Company';
import CompanyMember from './pages/CompanyMember';
import CompanyMembers from './pages/CompanyMembers';
import CompanyWarDetails from './pages/CompanyWarDetails';
import CompanyWars from './pages/CompanyWars';
import Home from './pages/Home';
import WarUpload from './pages/WarUpload';

const location = new ReactLocation();

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
      },
      {
        path: ':id',
        children: [
          {
            path: '/',
            element: <Company />,
          },
          {
            path: 'members',
            children: [
              {
                path: '/',
                element: () =>
                  import('./pages/CompanyMembers').then((res) => (
                    <res.default />
                  )),
              },
              {
                path: ':id',
                element: <CompanyMember />,
              },
            ],
          },
          {
            path: 'wars',
            children: [
              {
                path: '/',
                element: () =>
                  import('./pages/CompanyWars').then((res) => <res.default />),
              },
              {
                path: 'new',
                element: <WarUpload />,
              },
              {
                path: ':id',
                element: <CompanyWarDetails />,
              },
            ],
          },
        ],
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
