import { TweetCard } from 'components/TweetCard/TweetCard';
import { List, ListItem } from './TweetsList.styled';

export function TweetsList({ users, filter }) {
  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id}>
          <TweetCard user={user} filter={filter} />
        </ListItem>
      ))}
    </List>
  );
}
