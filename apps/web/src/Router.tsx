import {
  Outlet,
  ReactLocation,
  Route,
  Router as LocRouter,
} from 'react-location';
import Layout from './components/Layout';
import Companies from './pages/Companies';
import Company from './pages/Company';
import Home from './pages/Home';

const location = new ReactLocation();

export const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'companies',
    element: <Companies />,
    children: [
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
