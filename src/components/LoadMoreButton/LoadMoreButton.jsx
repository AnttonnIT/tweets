import { StyledLoadMoreBtn } from './LoadMoreButton.styled';

export function LoadMoreButton({ onClick, isLoading }) {
  return (
    <StyledLoadMoreBtn disabled={isLoading} onClick={onClick}>
      {isLoading ? 'Loading...' : 'Load more'}
    </StyledLoadMoreBtn>
  );
}
