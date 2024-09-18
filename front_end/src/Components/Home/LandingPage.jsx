import React, { useState, useEffect } from 'react';
import MenuBar from '../../utils/MenuBar';
import MenuIcon from '../../utils/MenuIcon';
import { useScroll, motion } from 'framer-motion';
import Home3dMaterial from './Home3dMaterial';
import "../../../src/style.css";

const LandingPage = () => {
  const [finalVal, setFinalVal] = useState(false); // Tracks menu toggle state
  const [menuState, setMenuState] = useState({ visible: false, scale: 0 }); // Consolidated state for scroll visibility and icon scale
  const { scrollYProgress } = useScroll();

  // Handles the state passed from MenuIcon
  const handleMenuToggle = (isVisible) => setFinalVal(isVisible);

  useEffect(() => {
    try {
      const unsubscribe = scrollYProgress.on('change', (value) => {
        const scrollPercentage = Math.floor(value * 100);
  
        setMenuState({
          visible: scrollPercentage >= 5,
          scale: scrollPercentage >= 5 ? 1 : 0,
        });
      });
  
      return () => unsubscribe(); // Cleanup on component unmount
    } catch (error) {
      console.log(error);
      
    }
  }, [scrollYProgress]);

  return (
    <>
      {/* Main content */}
        <section aria-labelledby="3d-animation-section" className="relative h-screen w-full overflow-hidden hero-div">
          
          {/* 3D Material Section */}
          <article id="3d-animation-section" aria-label="3D Animation">
            <Home3dMaterial />
          </article>

          {/* Side Menu */}
          <aside
            className={`h-full fixed top-0 transition-all duration-1000 ease-in-out z-12 ${finalVal ? 'w-[37%]' : 'w-0'} right-0 overflow-hidden flex`}
            aria-labelledby="side-menu"
          >
            {/* Background Circle Animation */}
            <div className="h-full w-[40vw] overflow-hidden">
              <div className={`h-[120vw] w-[120vw] left-1/2 top-1/2 -translate-y-[35vw] rounded-full bg-[#1C1D20] ${finalVal ? 'scale-0' : 'scale-2'} transition-all duration-700 ease-in-out`}></div>
            </div>

            {/* Side Menu Bar */}
              <MenuBar />
          </aside>

          {/* Menu Icon with dynamic scaling based on scroll state */}
          <motion.article
            initial={{ scale: 0 }}
            animate={{ scale: menuState.scale }}
            transition={{ duration: 0.3 }}
            className={`fixed bg-transparent z-[14] right-12 top-10 flex justify-center`}
          >
            <MenuIcon func={handleMenuToggle} />
          </motion.article>
        </section>
    </>
  );
};

export default LandingPage;
