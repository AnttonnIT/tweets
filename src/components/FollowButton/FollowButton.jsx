import { StyledFollowButton } from './FollowButton.styled';

export function FollowButton({ handleClick, following }) {
  return (
    <StyledFollowButton
      type="button"
      onClick={handleClick}
      background={following}
    >
      {following ? 'Following' : 'Follow'}
    </StyledFollowButton>
  );
}
