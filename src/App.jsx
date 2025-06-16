import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/pages/Navbar';
import Events from './components/pages/Events';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';
import Contact from './components/common/Contact';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/common/Footer';
import HomePage from './components/pages/HomePage';
import ErrorPage from './components/common/ErrorPage';

const App = () => {
  const location = useLocation(); // Hook to get the current location

  return (
    <>
      <Navbar />
      
      <div className='mt-10'>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
      {location.pathname !== "/contact" && <Contact />}

      <Footer />
      </div>
    </>
  );
};

export default App;
