import { Link } from 'react-router-dom'
import React from 'react';
import MagneticButton from '../../utils/MagneticButton'
import "../../../src/style.css"

const HomeFooter = () => {
    return (
        <footer className='footer h-screen w-full bg-[#1C1D20] overflow-hidden'>
            {/* first */}
            <article className='h-[85vh] w-full flex items-center justify-center '>
                <main className='h-full w-[70vw] py-[5vw]'>
                    <section className='border-b-[1px] border-zinc-100 py-[4vw] relative'>
                        <ul className='flex items-center gap-3'>
                            <li className='h-[6vw] w-[6vw] rounded-full bg-red-200'></li>
                            <li className='text-[5vw] text-white'>Let&apos;s Work</li>
                        </ul>
                        <ul className='leading-[10vw]'>
                            <h4 className='text-[5vw] text-white'>together</h4>
                        </ul>
                        <aside className='absolute right-20 -bottom-20 h-[12vw] w-[12vw] text-white text-md tracking-tighter flex items-center justify-center'>
                            <MagneticButton
                                data={"Get in touch"}
                                padding={"p-0"}
                                bgColor={"bg-[#3498DB]"}
                                borderRadius={"rounded-full"}
                                border={"border-none"}
                                borderColor="border-zinc-100"
                            />
                        </aside>
                    </section>
                    <section>
                        <article className='flex gap-4 items-center py-20 text-white'>
                            <Link to='/contact' className='h-[4.5vw] w-[25vw]'>
                                <MagneticButton
                                    data="kannenagaamaresh12@gmail.com"
                                    padding="p-[1.3vw]"
                                    bgColor="bg-none"
                                    borderRadius='rounded-full'
                                    border="border-[1px]"
                                    borderColor="border-zinc-100"
                                />
                            </Link>
                            <Link to='/phone' className='h-[4.5vw] w-[12vw]'>

                                <MagneticButton
                                    data={"+91 6304196352"}
                                    padding={"p-[1.3vw]"}
                                    bgColor={"bg-none"}
                                    borderRadius={"rounded-full"}
                                    border={"border-[1px]"}
                                    borderColor={"border-zinc-100"}
                                />
                            </Link>
                        </article>
                    </section>
                </main>
            </article>
            {/* second */}
            <article className='py-[4vw] w-full flex items-center justify-between'>
                <aside className='h-full w-[25vw] flex items-center justify-between px-[3vw] text-white font-semibold relative'>
                    <p>&copy; 2024 My Portfolio | <a href="/sitemap">Sitemap</a></p>
                    {/* <p>h</p> */}
                    <h4 className='absolute left-12 text-xs -top-[2vw] text-zinc-500'>VERSION</h4>
                </aside>
                <aside className='flex items-center justify-evenly h-full w-[25vw] text-md font-semibold text-white relative'>
                    <Link to='/github'><h4>Github</h4></Link>
                    <Link to='/twitter'><h4>Twitter</h4></Link>
                    <Link to='/linkedin'><h4>LinkedIn</h4></Link>
                    <Link to='/naukri'><h4>Naukri</h4></Link>
                    <h4 className='absolute left-8 text-xs -top-[2vw] text-zinc-500'>SOCIALS</h4>
                </aside>
            </article>
        </footer>
    )
}

export default HomeFooter
