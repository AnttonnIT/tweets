import { Container } from 'shared/styles/SharedStyles';
import { Link, List, StyledHeader } from './Header.styled';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <List>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/tweets">
                <b>Tweets</b>
              </Link>
            </li>
          </List>
        </nav>
      </Container>
    </StyledHeader>
  );
}
