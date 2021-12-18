import { FC } from 'react';
import Carousel from '~/components/common/Carousel';
import { Offer } from '~/data/offers';
import styled from 'styled-components';

const Image = styled.div<{ url: string }>`
  height: 500px;
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center 40%;
`;

interface HeaderProps {
  offer: Offer;
}

const Header: FC<HeaderProps> = ({ offer }) => {
  return (
    <div style={{ marginBottom: '2rem', height: '500px' }}>
      <Carousel type="inner" slidesToShow={1} fade={true}>
        {offer.images.map((img) => (
          <Image url={img} key={img} />
        ))}
      </Carousel>
    </div>
  );
};

export default Header;
