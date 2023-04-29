import { useEffect, useState } from 'react';
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

export function TweetCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const isUserFollowed = localStorage.getItem(`follow-${user.id}`);
    setIsFollowing(!!isUserFollowed);
  }, [user.id]);

  const handleFollowClick = () => {
    if (isFollowing) {
      localStorage.removeItem(`follow-${user.id}`);
      setIsFollowing(false);
    } else {
      localStorage.setItem(`follow-${user.id}`, true);
      setIsFollowing(true);
    }
  };
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
          <CardUserPhoto src={user.avatar} alt={user.name} />
        </CardUserPhotoWrapper>

        <TweetInfo>
          <li>
            <p>{user.tweets} tweets</p>
          </li>
          <li>
            <p>{(user.followers + isFollowing).toLocaleString()} followers</p>
          </li>
        </TweetInfo>

        <FollowButton handleClick={handleFollowClick} following={isFollowing} />
      </CardBottom>
    </Card>
  );
}
