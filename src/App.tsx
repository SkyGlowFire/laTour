import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Footer from '~/components/Footer';
import { useEffect } from 'react';
import Page404 from './components/Page404';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./components/Home'));
const Accomodtion = lazy(() => import('./components/Accomodation'));
const Offer = lazy(() => import('./components/Offer'));

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/accomodations/:id" element={<Accomodtion />} />
            <Route path="/offers/:id" element={<Offer />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
          {/* <Footer /> */}
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
