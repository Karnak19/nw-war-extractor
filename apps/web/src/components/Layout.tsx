import { OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import MyNavbar from './Navbar';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <>
      <MyNavbar>
        <div>{children}</div>
      </MyNavbar>
    </>
  );
}

export default Layout;
