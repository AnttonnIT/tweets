import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  margin-left: 50px;
  text-decoration: none;
  font-weight: 500;

  transition: color 250ms linear;
  :hover,
  :focus {
    color: orangered;
  }
`;
