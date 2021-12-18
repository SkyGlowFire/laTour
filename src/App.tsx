import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Accomodtion from './components/Accomodation';
import Footer from '~/components/Footer';
import { useEffect } from 'react';
import Page404 from './components/Page404';
import Offer from './components/Offer';

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodations/:id" element={<Accomodtion />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
