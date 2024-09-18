import React from 'react';

const LoadingPage = () => {
  return (
    <div className='h-screen w-full absolute flex items-center justify-center bg-[#1C1D20] z-[12]'>
        <h4 className='text-white text-2xl'><span className="h-[.8vw] w-[.8vw] relative left-0 top-0 -translate-x-1/2  -translate-y-1/3 inline-block rounded-full bg-zinc-100"></span>WELCOME</h4>
        <div className='absolute left-0 top-0 h-[.2vw] bg-white w-1/2 z[10]'></div>
    </div>
  )
}

export default LoadingPage