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

export function TweetCard({ user, filter }) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem(`following`));
    const isUserFollow = localStorageData?.some(
      followingUser => followingUser.id === user.id
    );
    setIsFollowing(isUserFollow);
  }, [user.id]);

  const handleFollowClick = () => {
    const savedUsers = JSON.parse(localStorage.getItem(`following`));
    const isFollowingUser = savedUsers?.some(
      followingUser => followingUser.id === user.id
    );

    if (!savedUsers) {
      localStorage.setItem(`following`, JSON.stringify([user]));
      setIsFollowing(true);
    } else if (!isFollowingUser) {
      localStorage.setItem(`following`, JSON.stringify([...savedUsers, user]));
      setIsFollowing(true);
    } else {
      const updatedUsers = savedUsers.filter(
        followingUser => followingUser.id !== user.id
      );

      localStorage.setItem('following', JSON.stringify(updatedUsers));
      setIsFollowing(false);
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
