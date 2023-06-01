import React from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { Form } from './Loginform.styled';
import { Section } from '../Section/Section';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section title="Login">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField label="Email" type="email" name="email" />
        <TextField label="Password" type="password" name="password" />
        <Button type="submit">Log in</Button>
      </Form>
    </Section>
  );
};
