import { TweetCard } from 'components/TweetCard/TweetCard';
import { List, ListItem } from './TweetsList.styled';

export function TweetsList({ users }) {
  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id}>
          <TweetCard user={user} />
        </ListItem>
      ))}
    </List>
  );
}
