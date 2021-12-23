import { FC } from 'react';
import Container from '~/components/styled/Container';
import { Villa } from '~/data/villas';
import styled from 'styled-components';

const Section = styled.div`
  margin: 0 0 2rem 0;
  font-size: 16px;
  line-height: 1.5rem;
  padding: 0 4rem;
`;

interface InfoProps {
  villa: Villa;
}

const Info: FC<InfoProps> = ({ villa }) => {
  return (
    <Section>
      <Container>
        <h1>{villa.title}</h1>
        <p style={{ marginBottom: '1rem' }}>{villa.description}</p>
        <h4 style={{ marginBottom: '1rem' }}>Amenities</h4>
        <ul>
          {villa.amenities.map((amenity) => (
            <li key={`am-${amenity}`}>{amenity}</li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Info;
