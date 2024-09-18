import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkShowPagev2 = ({ all, isdesign, isdevelop }) => {
    const [goHere, setGoHere] = React.useState(null);
    const [scale, setScale] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const works = useMemo(() => [
        { image: "https://plus.unsplash.com/premium_vector-1723193313945-36017b5d5d73?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "one", subtitle: "Design and developing", year: "2015", design: true, development: true },
        { image: "https://plus.unsplash.com/premium_vector-1723193313919-a33c11de1cfb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "two", subtitle: "Design only", year: "2016", design: true, development: false },
        { image: "https://plus.unsplash.com/premium_vector-1723193313987-3a1ee4e6d32c?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "three", subtitle: "Development only", year: "2017", design: false, development: true },
        { image: "https://plus.unsplash.com/premium_vector-1723193313939-6e4cbd8fc4d6?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "four", subtitle: "Neither", year: "2018", design: false, development: false },
    ], []);

    const filteredWorks = useMemo(() => {
        if (all) return works;
        return works.filter(item => (isdesign && item.design) || (isdevelop && item.development));
    }, [all, isdesign, isdevelop]);

    const handleMouseMove = useCallback((e, title) => {
        setGoHere(title);
        setPosition({ x: e.clientX, y: e.clientY });
        setScale(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setScale(false);
    }, []);

    return (
        <section className="relative text-center">
            {filteredWorks.map((item, index) => (
                <article
                    key={index}
                    onMouseMove={(e) => handleMouseMove(e, item.title)} 
                    onMouseLeave={handleMouseLeave} // Added to handle scale reset
                    className="h-screen w-[40%] mx-10 my-10 inline-block shrink-0"
                >
                    <figure style={{ transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)" }} className="cursor-pointer h-[80%] w-full bg-red-400">
                        <img className="h-full w-full object-cover" src={item.image} alt={item.title} />
                        <figcaption>
                            <h4 className="py-6 text-4xl text-start text-[#1C1D20] border-b-[1px] border-zinc-400 px-2">{item.title}</h4>
                            <div className="flex items-center justify-between px-2 py-6 text-lg text-[#1C1D20]">
                                <h6>{item.subtitle}</h6>
                                <h6>{item.year}</h6>
                            </div>
                        </figcaption>
                    </figure>
                </article>
            ))}

            {goHere && (
                <Link
                    to={`/${goHere}`}
                    onMouseEnter={() => setScale(true)}
                    onMouseLeave={() => setScale(false)}
                    style={{
                        transition: "transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), top 0.6s cubic-bezier(0.19, 1, 0.22, 1), left 0.6s cubic-bezier(0.19, 1, 0.22, 1)",
                        transform: `translate(-50%, -50%) scale(${scale ? 1 : 0})`,
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        position: "fixed",
                    }}
                    className="h-[8vw] w-[8vw] bg-blue-400 rounded-full text-white flex items-center justify-center"
                >
                    View
                </Link>
            )}
        </section>
    );
};

WorkShowPagev2.propTypes = {
    all: PropTypes.bool.isRequired,
    isdesign: PropTypes.bool.isRequired,
    isdevelop: PropTypes.bool.isRequired,
};

export default WorkShowPagev2;
