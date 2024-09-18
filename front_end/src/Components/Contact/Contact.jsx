import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../../utils/Loader.jsx';

const NavBar = lazy(() => import('../../utils/NavBar'));

const ContactFooter = lazy(() => import('./ContactFooter'));
const ContactMain = lazy(() => import('./ContactMain'));

const Contact = () => {

  const myImage = "../../assets/images/img1_portfolio.jpg"; // Ensure this URL is correct

  return (
    <section>
      <Helmet>
        <title>Naga Amaresh | Contact</title>
        <meta name="description" content="Get in touch with Naga Amaresh, a skilled web developer, and discuss your project requirements or potential collaborations." />
        <meta name="keywords" content="contact, portfolio, web developer, Naga Amaresh" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Naga Amaresh | Contact" />
        <meta property="og:description" content="Get in touch with Naga Amaresh, a skilled web developer, and discuss your project requirements or potential collaborations." />
        <meta property="og:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`}  />
        <meta property="og:url" content="https://my-portfolio-frontend-oqoc.onrender.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naga Amaresh | Contact" />
        <meta name="twitter:description" content="Get in touch with Naga Amaresh, a skilled web developer, and discuss your project requirements or potential collaborations." />
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
      <Suspense fallback={<Loader />}>
        <main className='text-white bg-[#1C1D20]'>
          <NavBar textColor="white" bgColor="#1C1D20" />
          <ContactMain />
        </main>
        <ContactFooter />
      </Suspense>
    </section>
  );
};

export default Contact;
