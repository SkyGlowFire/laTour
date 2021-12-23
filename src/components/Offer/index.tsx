import { useParams } from 'react-router-dom';
import { offers } from '~/data/offers';
import Header from './Header';
import Page404 from '../Page404';
import Info from './Info';
import Layout from '../Layout';

const Offer = () => {
  const { id } = useParams();
  const offer = offers.find((offer) => offer.id === Number(id));
  return offer ? (
    <Layout>
      <Header offer={offer} />
      <Info offer={offer} />
    </Layout>
  ) : (
    <Page404 />
  );
};

export default Offer;
