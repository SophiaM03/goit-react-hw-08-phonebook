import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      operations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button type="submit">Register</Button>
    </Form>
  );
};
