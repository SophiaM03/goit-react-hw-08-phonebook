import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  cursor: pointer;
  color: #ff00a7c7;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }
`;
