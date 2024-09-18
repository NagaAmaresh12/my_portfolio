import { Link } from "react-router-dom"
import React from 'react';
import "../../src/style.css"

const MenuBar = () => {
    return (
    <aside className='h-full w-full  bg-[#1C1D20] px-[7vw] py-[7vw] fixed z-[20]'>
        <div className=" h-full w-full  " >
            <div className="h-[8%] relative">
                <h4 className="absolute left-0 top-0 text-zinc-500 text-xs font-semibold">NAVIGATION</h4>
            </div>
            <div className=" w-full  border-t-[1px] border-zinc-500 py-10 tracking-tighter ">
                <Link to="/" className="text-[4vw] text-white  block ">Home</Link>
                <Link to="/work" className="text-[4vw] text-white  block">Work</Link>
                <Link to="about" className="text-[4vw] text-white  block">About</Link>
                <Link to="contact" className="text-[4vw] text-white  block">Contact</Link>
            </div>
            <div className="relative h-[8%] py-10 text-zinc-100 my-[2vw] flex gap-3">
                <Link>Github</Link>
                <Link>LinkedIn</Link>
                <Link>Naukri</Link>
                <div className="absolute top-2 text-xs left-0 text-zinc-500 font-semibold"><h4>SOCIALS</h4></div>
            </div>
        </div>
    </aside>
    )
}

export default MenuBar