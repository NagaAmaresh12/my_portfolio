import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeWork = () => {
    const floatDivRef = useRef(null);
    const mainDivRef = useRef(null);
    const animationFrameId = useRef(null);
    const [scale, setScale] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const movingFunc = (e) => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }

            animationFrameId.current = requestAnimationFrame(() => {
                if (floatDivRef.current) {
                    floatDivRef.current.style.left = `${e.clientX}px`;
                    floatDivRef.current.style.top = `${e.clientY}px`;
                }
            });
        };

        const handleMouseEnter = () => {
            setScale(1);
            mainDivRef.current?.addEventListener('mousemove', movingFunc);
        };

        const handleMouseLeave = () => {
            setScale(0);
            mainDivRef.current?.removeEventListener('mousemove', movingFunc);
        };

        mainDivRef.current?.addEventListener('mouseenter', handleMouseEnter);
        mainDivRef.current?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            mainDivRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            mainDivRef.current?.removeEventListener('mouseleave', handleMouseLeave);
            mainDivRef.current?.removeEventListener('mousemove', movingFunc);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    const works = [
        { name: "work1", role: "design", imgSrc: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "work2", role: "development", imgSrc: "https://images.unsplash.com/photo-1653480534591-99a5e8752e32?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "work3", role: "development", imgSrc: "https://i.pinimg.com/736x/2f/12/76/2f12762f106b4cf8a4711131dcc71e5b.jpg" },
        { name: "work4", role: "development", imgSrc: "https://i.pinimg.com/736x/d4/b7/e4/d4b7e44c3fef5bca8769d5087555c785.jpg" },
    ];

    return (
        <section className="relative my-[10vw] overflow-hidden">
            <h5 className="relative left-[10vw] px-20 w-3/4 top-0 text-zinc-400 font-extralight text-sm py-4 border-b-[1px] border-zinc-400">
                Recent Work
            </h5>

            <section ref={mainDivRef} className="big-container w-full">
                <article className="relative w-full flex flex-col items-center justify-center">
                    <ul className='list-none'>
                        {works.map((item, index) => (
                            <li key={item.name}>
                                <Link
                                    to={item.name}
                                    className="h-[10vw] w-[80vw] py-[7vw] flex items-center justify-between px-[7vw] border-b-[1px] border-zinc-300"
                                    onMouseEnter={() => setValue(index)}
                                >
                                    <h4 className="text-[6vw] text-zinc-900 font-semibold">{item.name}</h4>
                                    <h6 className="text-lg text-zinc-900 font-medium">{item.role}</h6>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <article
                        ref={floatDivRef}
                        style={{
                            transform: `translate(-50%, -50%) scale(${scale})`,
                            transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1), top 0.6s cubic-bezier(0.19, 1, 0.22, 1), left 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
                            position: 'fixed',
                            top: '0',
                            left: '0',
                        }}
                        className="z-20 max-h-[50vh] overflow-hidden border-none outline-none w-[50vh] bg-blue-400 pointer-events-none"
                    >
                        <aside className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[5vw] w-[5vw] pointer-events-none cursor-pointer bg-blue-600 z-[10] flex items-center justify-center text-white rounded-full">
                            view
                        </aside>

                        <ul
                            style={{
                                transform: `translateY(-${value * 50}vh)`,
                                transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1) .1s',
                            }}
                            className="list-none border-none outline-none h-[250vh] w-full left-0 top-0"
                        >
                            {works.map((item, index) => (
                                <li key={item.name} className={`project-${index + 1} bg-red-200 h-[50vh] w-full`}>
                                    <img
                                        src={item.imgSrc}
                                        className="h-full w-full object-cover"
                                        alt={`work-${index + 1}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </article>
                </article>
            </section>

            <aside className="w-full flex items-center justify-center">
                <Link
                    to="/work"
                    className="my-[5vw] h-[4vw] w-[14vw] bg-white border-[1px] py-[2.5vw] border-zinc-300 rounded-full text-white flex items-center justify-center"
                >
                    <h5 className="text-zinc-900 font-normal text-lg">More Work</h5>
                </Link>
            </aside>
        </section>
    );
};

export default HomeWork;
