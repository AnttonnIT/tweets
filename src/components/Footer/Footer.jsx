import { Container } from 'shared/styles/SharedStyles';
import { FooterContainer, StyledFooter } from './Footer.styled';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContainer>
          <span>Developed by </span>
          <a
            href="https://github.com/AnttonnIT/tweets"
            target="_blank"
            rel="noreferrer"
          >
            Anton Kyryliuk
          </a>
        </FooterContainer>
      </Container>
    </StyledFooter>
  );
}
