import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton.jsx';

const NavBar = ({ textColor, bgColor }) => {
    const [onHover, setOnHover] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setOnHover(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOnHover(false);
    }, []);

    const navItems = [
        { path: '/work', label: 'Work' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        // The header element represents the banner or navigation of the page
        <header className={`text-${textColor} bg-${bgColor} sm:h-[3vw] sm:w-full h-32 w-full px-14 py-10 absolute left-0 top-0 z-[10]`}>
            {/* The nav element for primary navigation links */}
            <nav className="flex items-center justify-between text-xl ">
                {/* Link to the home page, wrapped in a semantic heading tag */}
                <h1 className="flex shrink-0 ">
                    <Link
                        to="/"
                        className={`magnetic-button relative flex h-[5vw] min-w-[19vw]`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <MagneticButton
                            borderRadius="rounded-none"
                            padding="padding-0"
                            border="border-0"
                            borderColor="border-none"
                            bgColor="none"
                            data="@ Code by Naga Amaresh"
                        />
                    </Link>
                </h1>

                {/* Use unordered list for navigation items */}
                <ul className="flex items-center gap-5">
                    {navItems.map(({ path, label }) => (
                        <li key={path} className="font-normal h-[4vw] w-[5vw]">
                            <Link to={path}>
                                <MagneticButton
                                    borderRadius="rounded-none"
                                    padding="padding-0"
                                    border="border-0"
                                    borderColor="border-none"
                                    bgColor="white"
                                    data={label}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
