import Container from '~/components/styled/Container';
import VillaCard from '~/components/common/VillaCard';
import Carousel from '~/components/common/Carousel';
import { villas } from '~/data/villas';
import styled from 'styled-components';
import { FC } from 'react';

const Section = styled.div`
  background: ${(p) => p.theme.colors.primary};
  padding: 1rem 0;
`;

interface Props {
  id: number;
}

const OtherVillas: FC<Props> = ({ id }) => {
  return (
    <Section>
      <Container>
        <Carousel slidesToShow={3} type="outer">
          {villas
            .filter((x) => x.id !== id)
            .map((villa) => (
              <VillaCard villa={villa} key={villa.id} />
            ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default OtherVillas;
