import Header from './Header';
import Intro from './Intro';
import Offers from './Offers';
import Villas from './Villas';
import VideoBanner from './VideoBanner';
import styled from 'styled-components';

const StyledHome = styled.div``;

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Intro />
      <Villas />
      <VideoBanner
        video={'https://latour.s3.eu-north-1.amazonaws.com/video/boat.mp4'}
        title="Arrive in style."
        text={[
          'Speed across jewel-toned waters with breeze in your hair.',
          'Enjoy complimentary speedboat transfers to and from the island when you stay seven nights or more.',
        ]}
      />
      <Offers />
    </StyledHome>
  );
};

export default Home;
