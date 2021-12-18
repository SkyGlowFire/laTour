import Header from './Header';
import Intro from './Intro';
import Offers from './Offers';
import Villas from './Villas';
import VideoBanner from './VideoBanner';
import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [offsetY, setOffsetY] = useState<null | number>(null);

  useEffect(() => {
    setOffsetY(window.scrollY);
  }, []);
  return (
    <>
      <Header offsetY={offsetY} />
      <Intro offsetY={offsetY} />
      <Villas />
      <VideoBanner
        video={'/video/boat.mp4'}
        title="Arrive in style."
        text={[
          'Speed across jewel-toned waters with breeze in your hair.',
          'Enjoy complimentary speedboat transfers to and from the island when you stay seven nights or more.',
        ]}
      />
      <Offers />
    </>
  );
};

export default Home;
