import  { useState, useMemo, useCallback } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import WorkShowPagev2 from './WorkShowPagev2';
import { Link } from "react-router-dom";
import MagneticButton from "../../utils/MagneticButton";
import React from 'react';

const WorkLandingPage = () => {
    const [menuValue, setMenuValue] = useState(false);
    const [filters, setFilters] = useState({
        all: true,
        isdesign: false,
        isdevelop: false
    });

    const works = useMemo(() => [
        { title: "The Damai1", location: "here", service: "this services", year: "2023", design: true, development: false },
        { title: "The Damai2", location: "here", service: "this services", year: "2023", design: false, development: true },
        { title: "The Damai3", location: "here", service: "this services", year: "2023", design: true, development: true },
        { title: "The Damai4", location: "here", service: "this services", year: "2023", design: false, development: false }
    ], []);

    const filteredWorks = useMemo(() => {
        return works.filter(item => {
            if (filters.all) return true;
            if (filters.isdesign && item.design) return true;
            if (filters.isdevelop && item.development) return true;
            return false;
        });
    }, [filters]);

    const handleFilterChange = useCallback((filterKey) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            all: filterKey === 'all',
            isdesign: filterKey === 'isdesign',
            isdevelop: filterKey === 'isdevelop'
        }));
    }, []);

    const toggleMenu = useCallback(() => {
        setMenuValue(prev => !prev);
    }, []);
    

    return (
        <>
            <section className="h-[80vh] w-full font-normal flex items-center justify-center pt-[10vw]">
                <div className="h-full w-[75vw] px-3 ">
                    <h4 className="text-[6vw] -leading-3">Creating next level</h4>
                    <h4 className="text-[6vw]">digital products</h4>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2 my-[4vw]">
                            {[{key: 'all', label: 'All'}, {key: 'isdesign', label: 'Design'}, {key: 'isdevelop', label: 'Development'}].map(({key, label}) => (
                                <button 
                                    key={key}
                                    onClick={() =>{ handleFilterChange(key);}}
                                    className={`cursor-pointer h-full px-12 py-6 border-[1px] border-zinc-300 rounded-full ${filters[key] ? 'bg-[#1C1D20] text-white' : ''}`}
                                >
                                    <h4 className="text-[1.2vw]">{label}</h4>
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={toggleMenu} className={`cursor-pointer h-[5vw] w-[5vw] rounded-full border-[1px] border-zinc-300 flex items-center justify-center text-3xl ${menuValue ? "bg-[#1C1D20] text-white" : "bg-white text-black"}`}>
                                <IoMenuOutline />
                            </button>
                            <button onClick={toggleMenu} className={`cursor-pointer h-[5vw] w-[5vw] rounded-full border-[1px] border-zinc-300 flex items-center justify-center text-3xl ${menuValue ? "bg-white text-[#1C1D20]" : "bg-[#1C1D20] text-white"}`}>
                                <CgMenuGridR />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='min-h-[20vh] w-full px-[5vw] my-[10vw]'>
                {menuValue && (
                    < >
                        <ul className='w-full border-b-[1px] border-zinc-300 py-[2vw] flex items-center justify-between px-[10vw] text-xs text-zinc-400 font-light'>
                            <h4 className="w-[40%]">CLIENT</h4>
                            <ul className='flex items-center justify-start text-xs text-zinc-400 font-light w-[60%]'>
                                <li className="w-[40%]">LOCATION</li>
                                <li className="w-[50%]">SERVICES</li>
                                <li className="w-[10%]">YEAR</li>
                            </ul>
                        </ul>

                        {filteredWorks.map((item, index) => (
                            <article key={index} className='border-b-[1px] border-zinc-300 py-[2vw] flex items-center justify-between font-semibold px-[10vw] text-[#1C1D20]'>
                                <h4 className="w-[40%] text-[3vw] font-light">{item.title}</h4>
                                <ul className='flex items-center justify-start font-medium w-[60%]'>
                                    <li className="w-[40%]">{item.location}</li>
                                    <li className="w-[50%]">{item.service}</li>
                                    <li className="w-[10%]">{item.year}</li>
                                </ul>
                            </article>
                        ))}
                    </>
                )}

                {!menuValue && (
                    <WorkShowPagev2 all={filters.all} isdesign={filters.isdesign} isdevelop={filters.isdevelop} />
                )}

                {/* button */}
                <aside className='h-[10vw] w-full my-10 flex items-center justify-center'>
                    <Link to="/archive">
                        <MagneticButton 
                            data={"Archive"}
                            border={"border-0"}
                            bgColor={"bg-[#1C1D20]"}
                            padding={"px-16 py-7 text-white"}
                            borderColor={"border-none"}
                            borderRadius={"rounded-full"}
                        />
                    </Link>
                </aside>
            </section>
        </>
    );
};

export default WorkLandingPage;
