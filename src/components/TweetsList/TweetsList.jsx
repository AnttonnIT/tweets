import { TweetCard } from 'components/TweetCard/TweetCard';
import { List, ListItem } from './TweetsList.styled';

export function TweetsList() {
  return (
    <List>
      <ListItem>
        <TweetCard />
      </ListItem>
    </List>
  );
}
