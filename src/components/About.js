import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';

import img1 from '../images/IMG_2099 copy(1).jpg';
import img2 from '../images/IMG_2099 copy(1).jpg';
import img3 from '../images/IMG_2099 copy(1).jpg';
import img4 from '../images/IMG_2099 copy(1).jpg';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
        <div className="hero" id='hero'>
            <div>
                <NavBar />
            </div>

            <div className="m-auto overflow-hidden mx-4 mt-12 lg:mt-16 p-2 md:p-12 h-5/6 lg:pb-24" data-aos="zoom-in">
                <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold text">About</h1>
                        <div className="text-xl font-semibold tracking-tight mb-5 text-gray-600">
                            St. George Pathfinders is a scouting organization that originated in Russia in 1909. Founded in Northern
                            California in 1950, our chapter carries on the long-standing tradition of mentoring youth in:
                            <ul className="mt-4">
                                <li>• Traditional scouting skills</li>
                                <li>• Developing a strong moral character</li>
                                <li>• Learning the responsibilities of citizenship</li>
                                <li>• Maintaining close ties to their Russian heritage</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex lg:justify-end w-full lg:w-1/2 relative">
                        <div className="carousel-container w-full h-72 relative overflow-hidden">
                            <div
                                className="carousel-wrapper w-full h-full flex transition-transform duration-1000 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                            {images.map((img, index) => (
                                <div key={index} className="flex-shrink-0 w-full h-full">
                                    <img
                                        src={img}
                                        alt={`carousel-image-${index}`}
                                        className="w-[75%] h-full object-cover rounded-lg mx-auto"
                                    />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default About;