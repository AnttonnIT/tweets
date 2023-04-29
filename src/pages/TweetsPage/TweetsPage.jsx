import { TitleIsHidden } from 'shared/styles/SharedStyles';
import { Section } from './TweetsPage.styled';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useEffect, useState } from 'react';
import { getUsers } from 'utils/api';
// import { Loader } from 'shared/components/Loader';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { limit } from 'refs/constants';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState('show all');

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

  // const filteredUsers = useMemo(() => {
  //   if (filter === 'show all') {
  //     return users;
  //   } else if (filter === 'follow') {
  //     return users.filter(user => user.follow);
  //   } else if (filter === 'followings') {
  //     const followingIds =
  //       JSON.parse(localStorage.getItem('followingIds')) || [];
  //     return users.filter(user => followingIds.includes(user.id));
  //   }
  // }, [users, filter]);

  return (
    <main>
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
        <TweetsList users={users} />
        {hasMore && (
          <LoadMoreButton
            onClick={handleClickLoadMoreButton}
            isLoading={loading}
          />
        )}
      </Section>
    </main>
  );
}
