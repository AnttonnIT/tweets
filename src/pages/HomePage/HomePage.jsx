import { Container } from 'shared/styles/SharedStyles';
import { StyledSections, StyledTitle, Text } from './HomePage.styled';

export default function HomePage() {
  return (
    <StyledSections>
      <Container>
        <StyledTitle>Welcome to our tweets app!</StyledTitle>
        <Text>
          Welcome to our user card page! Follow and unfollow other users and see
          their follower count. Our cards have two states: Follow and Following.
          Click Follow to increase the follower count by one and change the
          button color and text to Following. Refreshing the page will retain
          the Following state and follower count. Clicking again will return the
          button to Follow, decrease the follower count by one, and change the
          color and text. The backend uses mockapi.io and we have users with
          different tweets, followers, and avatars. Pagination displays 3 tweets
          per page with the Load More button. <b> Note: Written by ChatGPT.</b>
        </Text>
      </Container>
    </StyledSections>
  );
}
