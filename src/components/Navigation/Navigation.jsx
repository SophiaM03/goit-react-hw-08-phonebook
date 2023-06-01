import React from 'react';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
