import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  margin-right: 20px;
  color: #757575;
  font-size: 18px;
`;
export const Button = styled.button`
  align-items: center;
  padding: 5px 8px;
  border-radius: 2px;
  font-weight: 500;
  background-color: #ff00a7c7;

  cursor: pointer;
  color: #ff00a7c7;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    opacity: 1;
  }
`;
