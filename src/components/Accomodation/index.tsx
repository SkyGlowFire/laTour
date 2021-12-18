import { useParams } from 'react-router-dom';
import { villas } from '~/data/villas';
import Header from './Header';
import Page404 from '../Page404';
import Info from './Info';
import OtherVillas from './Villas';

const Accomodation = () => {
  const { id } = useParams();
  const villa = villas.find((villa) => villa.id === Number(id));
  return villa ? (
    <div>
      <Header villa={villa} />
      <Info villa={villa} />
      <OtherVillas id={Number(villa.id)} />
    </div>
  ) : (
    <Page404 />
  );
};

export default Accomodation;
