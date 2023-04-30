import { Container, TitleIsHidden } from 'shared/styles/SharedStyles';
import { WrapperBtnFilter } from './TweetsPage.styled';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { useState } from 'react';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { Filter } from 'components/Filter/Filter';

export default function TweetsPage() {
  const [filter, setFilter] = useState('show all');

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <section>
      <Container>
        <TitleIsHidden>TweetsPage</TitleIsHidden>
        <WrapperBtnFilter>
          <GoBackButton />
          <Filter filter={filter} handleFilterChange={handleFilterChange} />
        </WrapperBtnFilter>
        <TweetsList filter={filter} />
      </Container>
    </section>
  );
}
