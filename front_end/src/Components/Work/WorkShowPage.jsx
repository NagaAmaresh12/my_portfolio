import { useState } from 'react'
import WorkShowPagev2 from './WorkShowPagev2'
import React from 'react';
const WorkShowPage = () => {
    const [menuValue, setmenuValue] = useState(true);
  return (
    <div className='min-h-[20vh] w-full px-[5vw]'>
        <div className='border-b-[1px] px-[10vw] border-zinc-300 py-[3vw] flex items-center justify-between text-zinc-500 font-extralight text-xs'>
            <h4>CLIENT</h4>
            <div className='flex items-center justify-between gap-52'>
            <h4>LOCATION</h4>
            <h4>SERVICES</h4>
            <h4>YEAR</h4>
            </div>
        </div>
        {/* Apply loop here */}
        <div className={`${menuValue ? "block" : "hidden"} border-b-[1px] border-zinc-300 py-[2vw] flex items-center justify-between font-semibold px-[10vw] text-[#1C1D20]`}>
            <h4 className='text-[3vw] text-[#1C1D20]'>Twice</h4>
            <div className='flex items-center justify-between gap-52'>
            <h4>The Damai</h4>
            <h4>SERVICES</h4>
            <h4>YEAR</h4>
            </div>
        </div>
        <WorkShowPagev2/>

        {/* buttoon */}
        <div className='h-[10vw] w-full my-10 flex items-center justify-center'>
            <div className='flex items-center justify-center bg-[#1C1D20] px-16 py-7 rounded-full'>
                <h4 className='text-white'>Archive</h4>
            </div>
        </div>

    </div>
  )
}

export default WorkShowPage