import React, { useState, useEffect } from 'react';
// import heroBg from '..hero-bg.svg'; // Import the image
import heroBg from "../images/hero-bg.svg"

import img from "../images/IMG_2099 copy(1).jpg"

// Example image URLs (replace these with your actual image URLs)
const images = [
  img,
  img,
  img,
  img,
  img,
  img
  // "https://via.placeholder.com/800x500?text=Image+2",
  // "https://via.placeholder.com/800x500?text=Image+3",
  // "https://via.placeholder.com/800x500?text=Image+4",
  // "https://via.placeholder.com/800x500?text=Image+5",
  // "https://via.placeholder.com/800x500?text=Image+6"
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Automatically change the slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component is unmounted
  }, []);

  const imageWidth = 25; // Each image will take 25% of the width (for 4 images at a time)
  const gap = 16; // Gap between images in pixels (can be adjusted)
  const gapPercentage = gap / window.innerWidth * 100; // Convert gap from px to percentage

  return (
    <div
      className="relative w-full pb-8 px-16"
      style={{
        background: `url(${heroBg}) top center no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -250px',
      }}
    >
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        {/* Carousel Images */}
        <div
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${(currentIndex * (imageWidth + gapPercentage))}%)`, // Account for gap
            gap: `${gap}px`, // Apply gap between images
          }}
        >
          {/* Show 3 images at a time */}
          {[...images, ...images, ...images].map((image, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${imageWidth}%` }}>
              <img
                src={image}
                alt={`carousel ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
