import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/auth-selectors';

export default function RestrictedRoute({ redirectTo, component }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isLoggedIn || isRefreshing ? <Navigate to={redirectTo} /> : component;
}
