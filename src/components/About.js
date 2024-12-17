import React from 'react';
import img from '../images/IMG_2099 copy(1).jpg';

const About = () => {
    return (
        <>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl text font-bold">About</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                St. George Pathfinders is a scouting organization that originated in Russia in 1909. Founded in Northern
                                California in 1950, our chapter carries on the long-standing tradition of mentoring youth in:
                                </p>
                            </div>
                            
                            <div>
                                <ul className="mt-4 text-xl text-gray-600 font-semibold">
                                    <li>• Traditional scouting skills</li>
                                    <li>• Developing a strong moral character</li>
                                    <li>• Learning the responsibilities of citizenship</li>
                                    <li>• Maintaining close ties to their Russian heritage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About;