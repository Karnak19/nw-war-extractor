import { OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import { useRouter } from 'react-location';
import Container from './Container';
import MyNavbar from './Navbar';
import Spinner from './Spinner';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  const { pending } = useRouter();
  return (
    <>
      <MyNavbar>
        <Container>{!!pending ? <Spinner /> : children}</Container>
      </MyNavbar>
    </>
  );
}

export default Layout;
