import styled from '@emotion/styled';

export const TitleIsHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
`;

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

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  transition: scale 250ms linear;

  &:hover {
    scale: 1.05;
  }
`;
