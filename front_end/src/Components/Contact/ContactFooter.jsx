import React from 'react'
import { Link } from 'react-router-dom'

const ContactFooter = () => {
    return (
        <footer className='py-[4vw] w-full flex items-center justify-between text-white bg-[#1C1D20]'>
            <section className='h-full w-[25vw] flex items-center justify-between px-[3vw] text-white font-semibold relative'>
                <p>2024@ Edition</p>
                {/* <p>h</p> */}
                <div className='absolute left-12 text-xs -top-[2vw] text-zinc-500'>
                    <h4>VERSION</h4>
                </div>
            </section>
            <section className='flex items-center justify-evenly h-full w-[25vw] text-md font-semibold text-white relative'>
                <nav className='flex gap-6'>
                    <Link><h4>Github</h4></Link>
                    <Link><h4>Twitter</h4></Link>
                    <Link><h4>LinkedIn</h4></Link>
                    <Link><h4>Naukri</h4></Link>
                </nav>
                <div className='absolute left-8 text-xs -top-[2vw] text-zinc-500'>
                    <h4>SOCIALS</h4>
                </div>
            </section>
        </footer>
    )
}

export default ContactFooter