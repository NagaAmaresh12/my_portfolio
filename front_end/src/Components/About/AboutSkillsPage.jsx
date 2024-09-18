import React from 'react';

const AboutSkillsPage = () => {
    return (
        <section className='h-[80vh] w-full px-[8vw]'>
            <header>
                <h2 className='text-[4vw]'>I can help you with...</h2>
            </header>
            <section className='max-h-[60vh] w-full flex items-center justify-evenly gap-[3vw]'>
                {[1, 2, 3].map((_, index) => (
                    <article key={index} className='h-full w-2/6'>
                        <header className='border-b-[1px] border-zinc-300 py-[2vw]'>
                            <h3>{`0${index + 1}`}</h3>
                        </header>
                        <section className='h-[35vh] w-full flex flex-col justify-between py-12 leading-[2vw]'>
                            <h4 className='text-[2vw]'>Design</h4>
                            <p>
                                With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)
                            </p>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    );
};

export default AboutSkillsPage;
