export const filteredUsers = (filter, users, localStorageValue) => {
  switch (filter) {
    case 'show all':
      return users;
    case 'follow':
      const filteredUsers = users.filter(user => {
        return !localStorageValue?.some(savedUser => savedUser.id === user.id);
      });

      return filteredUsers;
    case 'followings':
      return localStorageValue;
    default:
      return [];
  }
};
