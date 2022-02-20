import { OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import Container from './Container';
import MyNavbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <MyNavbar>
        <Container>{children}</Container>
      </MyNavbar>
    </>
  );
}

export default Layout;
