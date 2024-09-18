import { useState, useEffect, useRef } from 'react';
import React from 'react';

const ScrollingText = () => {
    const [scrollDirection, setScrollDirection] = useState('right');
    const [position, setPosition] = useState(0);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = (e) => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scroll Down
                setScrollDirection('left');
            } else {
                // Scroll Up
                setScrollDirection('right');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;

        const animateText = () => {
            setPosition((prev) => {
                const containerWidth = containerRef.current.clientWidth;
                const textWidth = textRef.current.clientWidth;
                let newPosition = prev;

                // Move left or right based on scroll direction
                if (scrollDirection === 'right') {
                    newPosition = prev + 2;
                    if (newPosition >= containerWidth) {
                        newPosition = -textWidth;
                    }
                } else if (scrollDirection === 'left') {
                    newPosition = prev - 2;
                    if (newPosition <= -textWidth) {
                        newPosition = containerWidth;
                    }
                }

                return newPosition;
            });

            animationFrameId = requestAnimationFrame(animateText);
        };

        animationFrameId = requestAnimationFrame(animateText);

        return () => cancelAnimationFrame(animationFrameId);
    }, [scrollDirection]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                left: 0,
                bottom: 20,
                overflow: 'hidden',
                width: '100%',
                height: '20vw', // Increased container height
                // border: '1px solid #ddd',
                border:"none"
            }}
            className='border-none outline-none '
        >
            <div
                ref={textRef}
                style={{
                    position: 'absolute',
                    top: "0%",
                    whiteSpace: 'nowrap',
                    left: `${position}px`,
                    fontSize: '12vw', // Increased font size
                    color: 'white', // Changed text color for visibility
                    
                }}
            >
                Naga Amaresh - Naga Amaresh - Naga Amaresh - Naga Amaresh 
            </div>
        </div>
    );
};

export default ScrollingText;
