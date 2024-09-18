import React from 'react';

const ContactLandingPage = () => {
  return (
    <section className='h-[70vh] w-full px-[15vw] py-[13vw] bg-[#1C1D20] text-white'>
      <article className='h-full w-full flex items-center justify-start leading-[7vw] tracking-tighter'>
        <header className='h-full w-[80%]'>
          <h1 className='text-[6vw] text-white'>Let&apos;s start a</h1>
          <h1 className='text-[6vw] text-white'>project together</h1>
        </header>
        <figure className='h-[6vw] w-[6vw] rounded-full bg-blue-300 mt-[12vw]'>
          <img className='h-full w-full object-cover' src="" alt="Cool project icon" />
        </figure>
      </article>
    </section>
  );
};

export default ContactLandingPage;
