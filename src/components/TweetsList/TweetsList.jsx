import PropTypes from 'prop-types';
import { TweetCard } from 'components/TweetCard/TweetCard';
import { List, ListItem } from './TweetsList.styled';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Loader } from 'shared/components/Loader';
import { useFilteredUsers } from 'hooks/useFilteredUsers';
import { useState } from 'react';
import { filteredUsers } from './services';

export function TweetsList({ filter }) {
  const {
    filteredUsers: users,
    loading,
    hasMore,
    loadMore,
  } = useFilteredUsers(filter);

  const [localStorageValue, setLocalStorageValue] = useState(
    JSON.parse(localStorage.getItem('following'))
  );

  const handleClick = () => {
    setLocalStorageValue(JSON.parse(localStorage.getItem('following')));
  };

  return (
    <>
      {loading && <Loader />}
      <List>
        {filteredUsers(filter, users, localStorageValue).map(user => (
          <ListItem key={user.id}>
            <TweetCard user={user} onClick={handleClick} />
          </ListItem>
        ))}
      </List>
      {hasMore && filter !== 'followings' && (
        <LoadMoreButton onClick={loadMore} isLoading={loading} />
      )}
    </>
  );
}

TweetsList.propTypes = {
  filter: PropTypes.oneOf(['show all', 'follow', 'followings']).isRequired,
};
