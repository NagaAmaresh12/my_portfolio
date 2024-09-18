import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import myImage from "../assets/images/img1_portfolio.jpg";

// Lazy load components
const HomeFooter = lazy(() => import('../../src/Components/Home/HomeFooter.jsx'));
import Loader from '../../src/utils/Loader.jsx';
const NavBar = lazy(() => import("../utils/NavBar"));

const Archive = () => {
    const works = [
        { title: "The Damai", location: "here", service: "this services", year: "2023" },
        { title: "The Damai", location: "here", service: "this services", year: "2023" }
    ];
    let count = works.length;

    return (
        <section className="w-full">
            <Helmet>
                <title>Naga Amaresh | Archive</title>
                <meta name="description" content="Browse through the archive of projects by Naga Amaresh, showcasing various works and services." />
                <meta name="keywords" content="archive, projects, portfolio, Naga Amaresh, web developer" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Naga Amaresh | Archive" />
                <meta property="og:description" content="Browse through the archive of projects by Naga Amaresh, showcasing various works and services." />
                <meta property="og:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`} /> {/* Update with a valid image URL */}
                <meta property="og:url" content="https://my-portfolio-frontend-oqoc.onrender.com/archive" /> {/* Update with the actual URL */}
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Naga Amaresh | Archive" />
                <meta name="twitter:description" content="Browse through the archive of projects by Naga Amaresh, showcasing various works and services." />
                <meta name="twitter:image" content={`https://my-portfolio-frontend-oqoc.onrender.com/${myImage}`} /> {/* Update with a valid image URL */}

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Naga Amaresh",
                        "description": "Web Developer showcasing a variety of projects and services in the archive.",
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
                <NavBar textColor="black" bgColor="transparent" />
                <main className="mt-[6vw] min-h-[40vw] w-full px-[5vw]">
                    <header className="relative py-[7vw] pl-[10vw] font-normal tracking-tighter">
                        <h4 className="text-[5.5vw] inline-block text-black relative">
                            Archive
                            <span className="absolute -right-14 top-0 text-2xl">( {count} )</span>
                        </h4>
                    </header>
                    {/* Work Section */}
                    <div className="w-full my-[10vw]">
                        <div className='w-full border-b-[1px] border-zinc-300 py-[2vw] flex items-center justify-between font-semibold px-[10vw] text-[#1C1D20] text-xs text-zinc-400 font-light'>
                            <h4 className="w-[40%]">CLIENT</h4>
                            <ul className='flex items-center justify-start font-medium text-xs text-zinc-400 font-light w-[60%]'>
                                <li className="w-[40%]">LOCATION</li>
                                <li className="w-[50%]">SERVICES</li>
                                <li className="w-[10%]">YEAR</li>
                            </ul>
                        </div>

                        {/* Map through works */}
                        {works.map((item, index) => (
                            <div key={index} className='border-b-[1px] border-zinc-300 py-[2vw] flex items-center justify-between font-semibold px-[10vw] text-[#1C1D20]'>
                                <h4 className="w-[40%] text-[3vw] font-light text-[#1C1D20]">{item.title}</h4>
                                <div className='flex items-center justify-start font-medium w-[60%]'>
                                    <h4 className="w-[40%]">{item.location}</h4>
                                    <h4 className="w-[50%]">{item.service}</h4>
                                    <h4 className="w-[10%]">{item.year}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
                <HomeFooter />
            </Suspense>
        </section>
    );
}

export default Archive;
