import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  margin: 26px auto 0 auto;
  padding: 14px 39px;

  min-width: 196px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  border: none;
  border-radius: 10.3108px;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
