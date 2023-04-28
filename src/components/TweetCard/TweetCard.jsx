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
import { getUsers } from 'utils/api';
import { FollowButton } from 'components/FollowButton/FollowButton';

export function TweetCard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    getData();
  }, []);
  console.log(users);

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
          {users.length > 0 && (
            <CardUserPhoto src={users[0].avatar} alt={users[0].name} />
          )}
        </CardUserPhotoWrapper>
        {users.length > 0 && (
          <TweetInfo>
            <li>
              <p>{users[0].tweets} tweets</p>
            </li>
            <li>
              <p>{users[0].followers.toLocaleString()} followers</p>
            </li>
          </TweetInfo>
        )}

        <FollowButton />
      </CardBottom>
    </Card>
  );
}
