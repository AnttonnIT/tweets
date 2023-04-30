import PropTypes from 'prop-types';
import { StyledLoadMoreBtn } from './LoadMoreButton.styled';

export function LoadMoreButton({ onClick, isLoading }) {
  return (
    <StyledLoadMoreBtn disabled={isLoading} onClick={onClick}>
      {isLoading ? 'Loading...' : 'Load more'}
    </StyledLoadMoreBtn>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
