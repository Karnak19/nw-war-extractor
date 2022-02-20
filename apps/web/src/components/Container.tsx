import type { PropsWithChildren } from 'react';
import {
  Link,
  useLocation,
  useMatch,
  useMatchRoute,
  useRouter,
} from 'react-location';

function Container({ children }: PropsWithChildren<{}>) {
  const {
    current: { pathname },
  } = useLocation();

  const breadCrumb = pathname.split('/').filter(Boolean);

  return (
    <div className="container mx-auto mt-3 flex flex-col gap-5 px-5 lg:px-0">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {breadCrumb.map((crumb, index) => (
            <li key={index}>
              <Link to={`/${breadCrumb.slice(0, index + 1).join('/')}`}>
                {crumb}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
}

export default Container;
