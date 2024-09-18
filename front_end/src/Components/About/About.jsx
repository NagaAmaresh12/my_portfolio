import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../../utils/Loader.jsx';

// Lazy load components
const HomeFooter = lazy(() => import('../Home/HomeFooter'));
const NavBar = lazy(() => import('../../utils/NavBar'));
const AboutMain = lazy(() => import('./AboutMain'));
import myImage from "../../assets/images/img1_portfolio.jpg";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>Naga Amaresh | About</title>
        <meta name="description" content="Learn more about Naga Amaresh, a skilled web developer with experience in building innovative solutions and high-quality websites." />
        <meta name="keywords" content="web developer, about Naga Amaresh, portfolio, experience, skills" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Naga Amaresh | About" />
        <meta property="og:description" content="Learn more about Naga Amaresh, a skilled web developer with experience in building innovative solutions and high-quality websites." />
        <meta property="og:image" content={`https://localhost:5173/${myImage}`} /> {/* Update with a valid image URL */}
        <meta property="og:url" content="http://localhost:5173/about" /> {/* Update with the actual URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naga Amaresh | About" />
        <meta name="twitter:description" content="Learn more about Naga Amaresh, a skilled web developer with experience in building innovative solutions and high-quality websites." />
        <meta name="twitter:image" content={`https://localhost:5173/${myImage}`}  /> {/* Update with a valid image URL */}

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Naga Amaresh",
              "description": "Web Developer with experience in building innovative solutions and high-quality websites.",
              "url": ""http://localhost:5173",
              "sameAs": [
                "https://linkedin.com/in/nagaamaresh",
                "https://github.com/nagaamaresh"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Suspense fallback={<Loader />}>
        <NavBar textColor="black" bgColor="#1C1D20" />
        <AboutMain />
        <HomeFooter />
      </Suspense>
    </main>
  );
};

export default About;
