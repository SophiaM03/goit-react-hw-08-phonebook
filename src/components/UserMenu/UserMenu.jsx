import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/operations';
import { Container, Title, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const distpatch = useDispatch();
  const { name } = useSelector(authSelectors.selectUser);
  return (
    <Container>
      <Title>Welcome, {name}</Title>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => distpatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Container>
  );
};
