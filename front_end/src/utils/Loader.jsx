import React from 'react';
import loader from "../../src/assets/images/giphy.webp";

const Loader = ({ className }) => {
  const imgSrc = loader;

  const handleLoad = () => {
    console.log('Image loaded successfully');
  };

  const handleError = () => {
    console.error('Failed to load image');
    // You may want to display a fallback image or message here
  };

  return (
    <div className={`h-screen w-full flex items-center justify-center ${className} overflow-hidden bg-[#16151A]`}>
      <img
        src={imgSrc}
        alt="Loading..."
        onLoad={handleLoad}
        onError={handleError}
        className="w-32 h-32 object-cover
        "
      />
    </div>
  );
};

export default Loader;
