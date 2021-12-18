import { useParams } from 'react-router-dom';
import { offers } from '~/data/offers';
import Header from './Header';
import Page404 from '../Page404';
import Info from './Info';

const Offer = () => {
  const { id } = useParams();
  const offer = offers.find((offer) => offer.id === Number(id));
  return offer ? (
    <div>
      <Header offer={offer} />
      <Info offer={offer} />
    </div>
  ) : (
    <Page404 />
  );
};

export default Offer;
