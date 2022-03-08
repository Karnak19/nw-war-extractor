import { OAuthRedirectResult, OpenIDConnectUserInfo } from '@magic-ext/oauth';
import React, { useEffect, useState } from 'react';
import { useNavigate, useRouter } from 'react-location';
import { client } from '../graphql';

import { magic } from '../magic';
import Container from './Container';
import Login from './Login';
import MyNavbar from './Navbar';
import Spinner from './Spinner';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<OpenIDConnectUserInfo | null>(null);

  const { pending } = useRouter();
  const navigate = useNavigate();

  useEffect(() => {
    const checkDiscordLogin = async () => {
      try {
        const result = await magic.oauth.getRedirectResult();

        client.setHeader('Authorization', `Bearer ${result.magic.idToken}`);
        setUser(result.oauth.userInfo);
        localStorage.setItem('OAUTH_TOKEN', result.oauth.accessToken);
      } catch {
        window.location.href = window.location.origin;
      } finally {
        setLoading(false);
      }
    };

    const refetchDiscordUser = async () => {
      try {
        const OAuthToken = localStorage.getItem('OAUTH_TOKEN');

        if (!(await magic.user.isLoggedIn())) throw new Error('Not logged in');
        if (!OAuthToken) throw new Error("Can't find OAuth token");

        const token = await magic.user.getIdToken();

        client.setHeader('Authorization', `Bearer ${token}`);

        const result = await fetch('https://discordapp.com/api/v6/users/@me', {
          headers: {
            Authorization: `Bearer ${OAuthToken}`,
          },
        }).then((res) => res.json());
        console.log(result);
        setUser({ sources: { ['https://discord.com/api/users/@me']: result } });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (window.location.pathname === '/callback') {
      checkDiscordLogin();
      navigate({ to: '/' });
    } else {
      refetchDiscordUser();
    }
  }, []);

  const discordLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: 'discord',
        redirectURI: `${window.location.origin}/callback`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MyNavbar>
        <Container user={user}>
          {loading && <Spinner additionalText="Trying to log you in..." />}
          {!loading && !user && <Login handleSubmit={discordLogin} />}
          {!loading && user && !!pending && <Spinner />}
          {!loading && user && !pending && children}
        </Container>
      </MyNavbar>
    </>
  );
}

export default Layout;
