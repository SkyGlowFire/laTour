import styled from 'styled-components';
import Container from '~/components/styled/Container';
import Logo from './Logo';
import { villas } from '~/data/villas';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const StyledFooter = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
  row-gap: 2rem;
  column-gap: 1rem;
  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 0;
    column-gap: 0;
  }
`;

const LogoColumn = styled.div`
  order: 4;
  @media ${(p) => p.theme.breakpoints.md} {
    order: -1;
  }
`;

const Column = styled.div`
  & h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  & ul {
    list-style-type: none;
  }

  & a {
    color: ${(p) => p.theme.textColors.primary};
    &:hover {
      text-decoration: underline;
    }
  }

  & ul > li {
    margin-bottom: 0.5rem;
    color: ${(p) => p.theme.textColors.primary};
  }
`;

const homeLinks = [
  { title: 'Home', path: '/#Home' },
  { title: 'Accomodations', path: '/#Accomodations' },
  { title: 'Offers', path: '/#Offers' },
];

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <LogoColumn>
          <Logo />
        </LogoColumn>
        <Column>
          <h4>Home</h4>
          <ul>
            {homeLinks.map((link) => (
              <li key={link.title}>
                <HashLink to={link.path}>{link.title}</HashLink>
              </li>
            ))}
          </ul>
        </Column>
        <Column>
          <h4>Rooms & Villas</h4>
          <ul>
            {villas.map((villa) => (
              <li key={villa.id}>
                <Link to={`/accomodations/${villa.id}`}>{villa.title}</Link>
              </li>
            ))}
          </ul>
        </Column>
        <Column>
          <h4 id="Contacts">Contacts</h4>
          <ul>
            <li>Phone: 8(800)111-22-33</li>
            <li>Email: someEmail@gmail.com</li>
          </ul>
        </Column>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
