// import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import operations from '../redux/auth/operations';
import HomePage from '../page/HomePage';
import { ContactsPage } from '../page/ContactsPage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import { AppBar } from './AppBar/AppBar';
import { useAuth } from '../components/hooks/useAuth';
import { isTokenExists } from 'redux/auth/auth-selectors';

// const Container = styled.div`
//   width: 1200px;
//   margin: 0 auto;
// `;

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(isTokenExists);

  useEffect(() => {
    dispatch(operations.refreshUser(token));
  }, [dispatch, token]);

  return isRefreshing ? (
    <h2>Refreshing user...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
