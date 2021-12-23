import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from '~/components/Footer';
import { useEffect } from 'react';
import Page404 from './components/Page404';
import Loader from './components/Loader';

const Home = lazy(() => import('./components/Home'));
const Accomodtion = lazy(() => import('./components/Accomodation'));
const Offer = lazy(() => import('./components/Offer'));

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accomodations/:id" element={<Accomodtion />} />
            <Route path="/offers/:id" element={<Offer />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
          <Footer />
        </>
      </Suspense>
    </>
  );
}

export default App;
