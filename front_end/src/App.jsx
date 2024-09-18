import React, { useEffect } from 'react'; // Ensure you import React and useEffect
import './style.css'; 
import Home from './Components/Home/Home.jsx';
import Work from './Components/Work/Work.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import { Route, Routes } from 'react-router-dom';
import Archive from './Components/Archive.jsx';

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    // Initialize LocomotiveScroll with options if needed
    const locomotiveScroll = new LocomotiveScroll({
      // options here if needed
      // e.g., el: document.querySelector("[data-scroll-container]"),
      // smooth: true,
    });

    // Cleanup function to destroy LocomotiveScroll on component unmount
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <main>
      {/* Define your Routes here */}
      <Routes>
        <Route path="/archive" element={<Archive />} />
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
