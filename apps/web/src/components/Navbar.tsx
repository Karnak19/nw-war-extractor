import { MenuIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import type { PropsWithChildren } from 'react';

import { Link } from 'react-location';

const routes = [
  {
    path: '/companies',
    text: 'Companies',
    icon: <OfficeBuildingIcon className="h-6 w-6" />,
  },
];

function MyNavbar({ children }: PropsWithChildren<{}>) {
  return (
    <div className="drawer h-screen w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-200 flex flex-col">
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <MenuIcon className="h-6 w-6" />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">NW War Extractor</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu horizontal">
              {routes.map((route) => {
                return (
                  <li key={route.path}>
                    <Link to={route.path}>
                      <span className="text-base">{route.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 w-80 overflow-y-auto p-4">
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <Link to={route.path}>
                  <span>{route.icon}</span>
                  <span className="text-base">{route.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyNavbar;
