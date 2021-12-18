import Container from '~/components/styled/Container';
import VillaCard from '~/components/common/VillaCard';
// import Carousel from '~/components/styled/Carousel';
import Carousel from '~/components/common/Carousel';

import { villas } from '~/data/villas';

const Villas = () => {
  return (
    <Container style={{ textAlign: 'center' }}>
      <h1 id="Accomodations">Offering style and comfort</h1>
      <h2>Our villas</h2>
      <Carousel slidesToShow={3} type="outer">
        {villas.map((villa) => (
          <VillaCard villa={villa} key={villa.id} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Villas;
