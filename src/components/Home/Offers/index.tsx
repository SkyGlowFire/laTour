import styled from 'styled-components';
import Container from '~/components/styled/Container';
import Carousel from '~/components/common/Carousel';
import OfferCard from './OfferCard';
import { offers } from '~/data/offers';

const Section = styled.div`
  background: ${(p) => p.theme.colors.primary};
  padding: 1rem 0 3rem 0;
  min-height: 100px;
  text-align: center;
`;

const Offers = () => {
  return (
    <Section id="Offers">
      <Container>
        <h1>Simply for a Bit of Relaxation</h1>
        <h2>Special Offers</h2>
        <Carousel slidesToShow={1} type="outer">
          {offers.map((offer) => (
            <OfferCard offer={offer} key={offer.id} />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
};

export default Offers;
