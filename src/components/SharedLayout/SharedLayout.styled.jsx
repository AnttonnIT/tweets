import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 30px 0px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;
