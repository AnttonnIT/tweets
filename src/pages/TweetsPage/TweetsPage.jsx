import { TitleIsHidden } from 'shared/styles/SharedStyles';
import { Section } from './TweetsPage.styled';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useMemo, useState } from 'react';
import { getUsers } from 'utils/api';
// import { Loader } from 'shared/components/Loader';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { limit } from 'refs/constants';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
// import { useLocalStorage } from 'hooks/useLocalStorage';

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState('show all');
  // const [followings, setFollowings] = useState([]);
  // console.log(followings);
  // useEffect(() => {
  //   const savedFollowings = JSON.parse(localStorage.getItem('following'));
  //   if (savedFollowings) {
  //     setFollowings(savedFollowings);
  //   }

  //   const handleStorageChange = event => {
  //     if (event.key === 'following') {
  //       const newFollowings = JSON.parse(event.newValue);
  //       setFollowings(newFollowings || []);
  //     }
  //   };

  //   window.addEventListener('storage', handleStorageChange);

  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);
  useEffect(() => {
    if (!hasMore) return;

    const getData = async () => {
      try {
        setLoading(true);

        const data = await getUsers(page);
        if (data.length < limit) {
          setHasMore(false);
        }
        setUsers(prev => [...prev, ...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [hasMore, page]);

  const handleClickLoadMoreButton = () => {
    setPage(prev => prev + 1);
  };
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredUsers = useMemo(() => {
    const savedUsers = JSON.parse(localStorage.getItem(`following`));

    if (filter === 'show all') {
      return users;
    } else if (filter === 'follow') {
      const uniqueArray = users.filter(user => {
        return !savedUsers.some(savedUser => savedUser.id === user.id);
      });

      return uniqueArray;
    } else if (filter === 'followings') {
      return savedUsers;
    }
  }, [filter, users]);

  return (
    <Section>
      <TitleIsHidden>TweetsPage</TitleIsHidden>
      <GoBackButton />
      <div>
        <label>
          Filter:
          <select
            id="filter-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="show all">Show all</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </label>
      </div>
      <TweetsList users={filteredUsers} filter={filter} />
      {hasMore && filter !== 'followings' && (
        <LoadMoreButton
          onClick={handleClickLoadMoreButton}
          isLoading={loading}
        />
      )}
    </Section>
  );
}
