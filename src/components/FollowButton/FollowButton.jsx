import PropTypes from 'prop-types';
import { StyledFollowButton } from './FollowButton.styled';

export function FollowButton({ handleClick, following, onClick }) {
  return (
    <StyledFollowButton
      type="button"
      onClick={() => {
        handleClick();
        onClick();
      }}
      background={following}
    >
      {following ? 'Following' : 'Follow'}
    </StyledFollowButton>
  );
}

FollowButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  following: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
