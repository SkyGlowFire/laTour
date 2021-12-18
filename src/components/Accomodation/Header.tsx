import { FC } from 'react';
import Carousel from '~/components/common/Carousel';
import { Villa } from '~/data/villas';
import styled from 'styled-components';

const Image = styled.div<{ url: string }>`
  height: 500px;
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center 30%;
`;

interface HeaderProps {
  villa: Villa;
}

const Header: FC<HeaderProps> = ({ villa }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Carousel type="inner" slidesToShow={1} fade={true}>
        {villa.images.map((img) => (
          <Image url={img} key={img} />
        ))}
      </Carousel>
    </div>
  );
};

export default Header;
