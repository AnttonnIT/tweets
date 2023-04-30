import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  transition: color 250ms linear;
  :hover,
  :focus {
    color: orangered;
  }
`;
