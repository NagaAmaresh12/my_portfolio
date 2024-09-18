import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../src/style.css'; // Ensure this path is correct based on your project structure

const MagneticButton = ({
    data,
    border = 'border-none',
    bgColor = 'bg-transparent',
    padding = 'p-0',
    borderRadius = 'rounded-none',
    borderColor = 'border-transparent'
}) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);
    const animationFrameRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        try {
            if (!buttonRef.current) return;

            const button = buttonRef.current.getBoundingClientRect();
            const offsetX = (e.clientX - button.left) - button.width / 2;
            const offsetY = (e.clientY - button.top) - button.height / 2;
    
            // Only update the position when necessary
            if (offsetX !== position.left || offsetY !== position.top) {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                animationFrameRef.current = requestAnimationFrame(() => {
                    setPosition({ top: offsetY, left: offsetX });
                });
            }
        } catch (error) {
            console.log(error);
            
        }
    }, [position.left, position.top]);

    const resetPosition = useCallback(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
            setPosition({ top: 0, left: 0 });
        });
    }, []);

    useEffect(() => {
        // Clean up animation frame on component unmount
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={classNames(
                'magnetic-button',
                bgColor,
                border,
                borderColor,
                padding,
                borderRadius,
                'cursor-pointer',
                'h-full',
                'w-full',
                'flex',
                'items-center',
                'justify-center'
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
            style={{ transform: `translate(${position.left}px, ${position.top}px)` }}
        >
            <span className="capitalize">{data}</span>
        </button>
    );
};

MagneticButton.propTypes = {
    data: PropTypes.string.isRequired,
    border: PropTypes.string,
    bgColor: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    borderColor: PropTypes.string,
};

export default MagneticButton;
