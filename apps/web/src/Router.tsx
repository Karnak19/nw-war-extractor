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
import CompanyWars from './pages/CompanyWars';
import Home from './pages/Home';

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
                element: <CompanyMembers />,
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
                element: <CompanyWars />,
              },
              {
                path: ':id',
                element: <CompanyWars />,
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
