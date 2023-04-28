import { TitleIsHidden } from 'shared/styles/SharedStyles';
import { Section } from './TweetsPage.styled';
import { TweetsList } from 'components/TweetsList/TweetsList';

export default function TweetsPage() {
  return (
    <main>
      <Section>
        <TitleIsHidden>TweetsPage</TitleIsHidden>
        <TweetsList />
      </Section>
    </main>
  );
}
