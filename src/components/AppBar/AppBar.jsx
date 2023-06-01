import React from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Outlet } from 'react-router';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
};
