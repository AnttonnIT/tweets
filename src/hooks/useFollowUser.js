import { useState, useEffect } from 'react';

export function useFollowingUsers(user) {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem(`following`));
    const isUserFollow = savedUsers?.some(
      followingUser => followingUser.id === user.id
    );
    setIsFollowing(isUserFollow);
  }, [user.id]);

  const handleFollowClick = () => {
    const savedUsers = JSON.parse(localStorage.getItem(`following`));
    const isUserFollow = savedUsers?.some(
      followingUser => followingUser.id === user.id
    );

    if (!savedUsers) {
      localStorage.setItem(`following`, JSON.stringify([user]));
      setIsFollowing(true);
    } else if (!isUserFollow) {
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

  return {
    handleFollowClick,
    isFollowing,
  };
}
