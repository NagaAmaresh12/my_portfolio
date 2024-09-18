import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import myImage from "../../assets/images/img1_portfolio.jpg";
import HomeHeader from './HomeHeader.jsx';
import HomeMain from './HomeMain.jsx';

import Loader from '../../utils/Loader.jsx';
// Lazy load components


const HomeFooter = lazy(() => import('./HomeFooter.jsx'));

// Placeholder component while loading

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Naga Amaresh | Developer</title>
        <meta name="description" content="Welcome to my portfolio website where you can see my projects and skills." />
        <meta name="keywords" content="portfolio,home, web developer, projects, skills, Naga Amaresh, mern stack" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Naga Amaresh | Developer" />
        <meta property="og:description" content="Welcome to my portfolio website where you can see my projects and skills." />
        <meta property="og:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`}  />
        <meta property="og:url" content="https://my-portfolio-frontend-oqoc.onrender.com/"  />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naga Amaresh | Developer" />
        <meta name="twitter:description" content="Welcome to my portfolio website where you can see my projects and skills." />
        <meta name="twitter:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`}  />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Naga Amaresh",
              "description": "Web Developer with experience in building high-quality websites and applications.",
              "url": "https://my-portfolio-frontend-oqoc.onrender.com/",
              "sameAs": [
                "https://linkedin.com/in/nagaamaresh",
                "https://github.com/nagaamaresh"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Suspense fallback component */}
      <Suspense fallback={<Loader className={"home"} />}>

        <HomeHeader />
        <HomeMain />
        <HomeFooter />

      </Suspense>
    </>
  );
}

export default Home;
