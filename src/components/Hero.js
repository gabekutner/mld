import React, {  } from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Link } from 'react-router-dom';
// import heroImg from '../images/web-dev.svg
import flyerImg from '../images/README.jpg';

const Hero = () => {

    return (
        <>
            <div className="hero mt-10" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text">
                                Scouts Ball 2025!
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Per duis id curabitur etiam nascetur nisi. Conubia ridiculus curae fusce consectetur nostra nullam in ultrices. Lobortis massa iaculis conubia molestie curabitur amet tempor feugiat. Vulputate massa vel fermentum adipiscing urna convallis egestas nostra. Fames erat quisque, vulputate dis tortor diam condimentum aliquam nam. Netus sapien suscipit eget congue ad viverra tempor nullam. Habitant hendrerit efficitur; orci eleifend pellentesque litora maecenas cursus. Accumsan nam habitant cras, egestas ornare litora.
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/" className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Add to my Calendar
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex w-full lg:justify-center lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img 
                                alt="card img" 
                                className="rounded-t duration-1000 w-3/4 h-auto" // Centered and adjusted width
                                src={flyerImg} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
  );
};

export default Hero;