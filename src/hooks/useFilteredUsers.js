import { useState, useEffect, useMemo } from 'react';
import { limit } from 'refs/constants';
import { getUsers } from 'utils/api';

export function useFilteredUsers(filter) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

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

  const filteredUsers = useMemo(() => {
    const savedUsers = JSON.parse(localStorage.getItem(`following`));

    if (filter === 'show all') {
      return users;
    } else if (filter === 'follow') {
      const filteredUsers = users.filter(user => {
        return !savedUsers.some(savedUser => savedUser.id === user.id);
      });

      return filteredUsers;
    } else if (filter === 'followings') {
      return savedUsers;
    }
  }, [filter, users]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return {
    filteredUsers,
    loading,
    loadMore,
    hasMore,
  };
}
