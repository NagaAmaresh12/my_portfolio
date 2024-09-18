import React, { useState } from "react";

const HomeAtrract = () => {
    const [projects, setProjects] = useState([1, 2, 3, 4, 5,6,7]);
    return (
        <section className="h-[90vh] w-full bg-red-300 overflow-hidden ">
            <article className="h-1/2 min-w-screen bg-slate-300 border-b-[1px] border-zinc-400 flex mx-auto">
                {projects.map((item, index) => {
                    return (
                        <ul key={index} className=" list-none shrink-0 p-[3vw] h-full w-[30%] bg-blue-300 border-r-[1px] border-zinc-400 ">
                            <li className="h-full w-full bg-red-400"></li>
                        </ul>
                    );
                })}
            </article>
            <article className="h-1/2 w-full bg-slate-300 border-b-[1px] mx-auto border-zinc-400 flex">
            {projects.map((item, index) => {
                    return (
                        <ul key={index} className="list-none shrink-0 p-[3vw] h-full w-[30%] bg-blue-300 border-r-[1px] border-zinc-400 ">
                            <li className="h-full w-full bg-red-400 "></li>
                        </ul>
                    );
                })}
            </article>
        </section>
    );
};

export default HomeAtrract;
