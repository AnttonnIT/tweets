import PropTypes from 'prop-types';
import {
  Card,
  CardBottom,
  CardLogo,
  CardTop,
  CardTopWrapper,
  CardUserPhoto,
  CardUserPhotoWrapper,
  TweetInfo,
} from './TweetCard.styled';
import sprite from 'img/sprite.svg';
import { FollowButton } from 'components/FollowButton/FollowButton';
import { useFollowingUsers } from 'hooks/useFollowUser';

export function TweetCard({ user, onClick }) {
  const { isFollowing, handleFollowClick } = useFollowingUsers(user);

  const { avatar, name, tweets, followers } = user;

  return (
    <Card>
      <CardTop>
        <CardTopWrapper>
          <CardLogo>
            <use href={`${sprite}#icon-logo`}></use>
          </CardLogo>
        </CardTopWrapper>
      </CardTop>
      <CardBottom>
        <CardUserPhotoWrapper>
          <CardUserPhoto src={avatar} alt={name} />
        </CardUserPhotoWrapper>

        <TweetInfo>
          <li>
            <p>{tweets} tweets</p>
          </li>
          <li>
            <p>{(followers + isFollowing).toLocaleString()} followers</p>
          </li>
        </TweetInfo>

        <FollowButton
          handleClick={handleFollowClick}
          onClick={onClick}
          following={isFollowing}
        />
      </CardBottom>
    </Card>
  );
}

TweetCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    avatar: PropTypes.string,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
