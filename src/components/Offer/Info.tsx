import { FC } from 'react';
import Container from '~/components/styled/Container';
import { Offer } from '~/data/offers';
import styled from 'styled-components';

const Section = styled.div`
  margin: 0 0 2rem 0;
  font-size: 16px;
  line-height: 1.5rem;
  border-bottom: 5px solid ${(p) => p.theme.colors.primary};
`;

interface InfoProps {
  offer: Offer;
}

const Info: FC<InfoProps> = ({ offer }) => {
  return (
    <Section>
      <Container>
        <h1>{offer.title}</h1>
        <p style={{ marginBottom: '1rem' }}>{offer.description}</p>
        <h4 style={{ marginBottom: '1rem' }}>Inclusions</h4>
        <ul>
          {offer.inclusions.map((inclusion) => (
            <li>{inclusion}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Info;
