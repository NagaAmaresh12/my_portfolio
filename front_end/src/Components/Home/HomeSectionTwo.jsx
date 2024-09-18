import { Link } from 'react-router-dom';
import MagneticButton from '../../utils/MagneticButton';
import React from 'react';
const HomeSectionTwo = () => {

  return (
    <section className='h-[30vw] w-full flex items-center justify-center gap-32 px-[4vw] relative'>
      <article className='max-w-[40vw] text-center'>
        <p className='text-4xl tracking-tighter text-zinc-800 leading-[2.9vw]'>My passion for design, code, and interactive experiences uniquely positions me to excel in the web development industry..</p>
      </article>
      <article className='max-w-[20vw] tracking-tight text-gray-900 leading-[1.6vw]'><p>My expertise in the MERN stack, coupled with experience in various other technologies, allows me to build scalable and efficient solutions tailored to client needs.</p></article>

      <ul>
        <li>
          <Link to="/about" className={'h-[12vw] text-white hover-pointer w-[12vw] rounded-full absolute left-[67%] top-[85%] flex items-center justify-center text-xl'}>
            <MagneticButton borderRadius={"rounded-full"} padding={"padding-0"} border={"border-0"} borderColor={"border-none"} bgColor={"[#3498DB]"} data={"About me"} />
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default HomeSectionTwo;