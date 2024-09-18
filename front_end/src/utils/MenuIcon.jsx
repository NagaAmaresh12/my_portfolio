import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";

const MenuIcon = ({ func }) => {
    const [rotation, setRotation] = useState({ first: 0, second: 0 });
    const [isTrue, setIsTrue] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const firstLine = useRef(null);
    const secondLine = useRef(null);
    const buttonRef = useRef(null);

    // Call the function when `isTrue` changes
    useEffect(() => {
        func(isTrue);
    }, [isTrue, func]);

    // GSAP animation for rotating lines and button scaling
    useEffect(() => {
        gsap.to(firstLine.current, {
            rotation: `${rotation.first}deg`,
            duration: 0.5,
            ease: "power4.inOut",
        });
        gsap.to(secondLine.current, {
            rotation: `${rotation.second}deg`,
            duration: 0.5,
            ease: "power2.in-out",
        });

    }, [rotation]);

    // Handle button click to change rotation
    const handleClick = () => {
        setRotation({
            first: isTrue ? 0 : 135,
            second: isTrue ? 0 : -135,
        });
        setIsTrue(!isTrue);
    };

    // Handle mouse movement for the magnetic effect
    const handleMouseMove = (e) => {
        const button = buttonRef.current.getBoundingClientRect();
        const offsetX = (e.clientX - button.left) - button.width / 2;
        const offsetY = (e.clientY - button.top) - button.height / 2;

        // Only update position if there's a significant change
        const newPosition = { top: offsetY * 0.8, left: offsetX * 0.8 };
        if (newPosition.top !== position.top || newPosition.left !== position.left) {
            setPosition(newPosition);
        }
    };

    // Reset button position when hover ends
    const resetPosition = () => {
        setPosition({ top: 0, left: 0 });
    };

    return (
        <div
            onClick={handleClick}
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
            style={{
                transform: `translate(${position.left}px, ${position.top}px)`,
            }}
            className='magnetic-button z-[14] h-[5vw] w-[5vw] rounded-full bg-[#1C1D20] 
            hover:bg-[#3498DB] flex items-center justify-center flex-col cursor-pointer'
        >
            <div
                ref={firstLine}
                className="origin-center h-[1px] w-6 outline-none border-none rounded-full bg-zinc-100 my-1"
            ></div>
            <div
                ref={secondLine}
                className="origin-center h-[1px] w-6 outline-none border-none rounded-full bg-zinc-100 my-1"
            ></div>
        </div>
    );
};

MenuIcon.propTypes = {
    func: PropTypes.func.isRequired, // Ensures that func is a function and is required
    // count: PropTypes.bool.isRequired, // Added prop type for `count`
};

export default MenuIcon;
