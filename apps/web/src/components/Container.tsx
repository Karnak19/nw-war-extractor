import { OpenIDConnectUserInfo } from '@magic-ext/oauth';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-location';

function Container({
  children,
  user,
}: PropsWithChildren<{ user: OpenIDConnectUserInfo | null }>) {
  const [{ username, id, avatar }, setuserData] = useState({
    username: '',
    id: '',
    avatar: '',
  });

  const {
    current: { pathname },
  } = useLocation();

  const breadCrumb = pathname.split('/').filter(Boolean);

  useEffect(() => {
    if (user) {
      setuserData({
        username: user?.sources?.['https://discord.com/api/users/@me'].username,
        id: user?.sources?.['https://discord.com/api/users/@me'].id,
        avatar: user?.sources?.['https://discord.com/api/users/@me'].avatar,
      });
    }
  }, [user]);

  return (
    <div className="container mx-auto mt-3 flex flex-col gap-5 px-5 lg:px-0">
      <div className="flex justify-between">
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
        <div className="flex items-center justify-between gap-4">
          {user && (
            <>
              <p className="text-sm text-base-content">Hello {username}</p>
              <div className="avatar">
                <div className="mask mask-hexagon w-12">
                  <img
                    src={`https://cdn.discordapp.com/avatars/${id}/${avatar}`}
                    alt={username}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {children}
    </div>
  );
}

export default Container;
