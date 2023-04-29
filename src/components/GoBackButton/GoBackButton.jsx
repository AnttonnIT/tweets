import { useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledLink } from './GoBackButton.styled';

export const GoBackButton = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <StyledLink to={backLink}>
      <AiOutlineArrowLeft />
      Go Back
    </StyledLink>
  );
};
