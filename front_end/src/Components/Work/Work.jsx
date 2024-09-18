import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import myImage from "../../assets/images/img1_portfolio.jpg";

// Lazy load components
const WorkMain = lazy(() => import('./WorkMain'));
const NavBar = lazy(() => import('../../utils/NavBar'));
const HomeFooter = lazy(() => import('../Home/HomeFooter'));
import Loader from '../../utils/Loader.jsx';

const Work = () => {
  return (
    <main>
      <Helmet>
        <title>Naga Amaresh | Work</title>
        <meta name="description" content="Explore the projects and work of Naga Amaresh, a web developer with expertise in creating innovative solutions." />
        <meta name="keywords" content="web development, projects, work, portfolio, Naga Amaresh" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Naga Amaresh | Work" />
        <meta property="og:description" content="Explore the projects and work of Naga Amaresh, a web developer with expertise in creating innovative solutions." />
        <meta property="og:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`} /> {/* Update with a valid image URL */}
        <meta property="og:url" content="https://my-portfolio-frontend-oqoc.onrender.com/work" /> {/* Update with the actual URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naga Amaresh | Work" />
        <meta name="twitter:description" content="Explore the projects and work of Naga Amaresh, a web developer with expertise in creating innovative solutions." />
        <meta name="twitter:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`}  /> {/* Update with a valid image URL */}

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Naga Amaresh",
              "description": "Web Developer with expertise in creating innovative solutions and high-quality websites.",
              "url": "https://my-portfolio-frontend-oqoc.onrender.com/",
              "sameAs": [
                "https://linkedin.com/in/nagaamaresh",
                "https://github.com/nagaamaresh"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Suspense fallback={<Loader />}>
        <NavBar />
        <WorkMain />
        <HomeFooter />
      </Suspense>
    </main>
  );
}

export default Work;
