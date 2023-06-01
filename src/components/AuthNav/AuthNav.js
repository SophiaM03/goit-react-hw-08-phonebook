import React from 'react';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register"> Sign up </Link>
      <Link to="/login"> Log in </Link>
    </div>
  );
};
