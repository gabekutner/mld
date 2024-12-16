import React from 'react';
// import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  return (
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="calendar">
      <div className="flex flex-col lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
        {/* Placeholder for Calendar */}
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center" data-aos="zoom-in">
          {/* This is just a blank div */}
          <div className="border border-dashed border-gray-400 h-80">
            {/* Calendar Placeholder */}
            <p className="text-center text-gray-500 p-4">Upcoming Events Calendar (Placeholder)</p>
          </div>
        </div>

        {/* Event Details Section */}
        <div
          className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h3 className="text-3xl text font-bold">Calendar</h3>
          <div className="my-3 text-xl text-gray-600 font-semibold">
            <p>Check out the upcoming events and join us for some exciting activities!</p>
          </div>

          {/* Event List Placeholder */}
          <div>
            <h4 className="text-xl font-bold">Upcoming Events:</h4>
            <ul className="my-3 text-lg">
              <li>Event 1 - Date</li>
              <li>Event 2 - Date</li>
              <li>Event 3 - Date</li>
            </ul>
          </div>

          {/* Contact Button */}
          {/* <Link
            to="/contact"
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
          >
            Contact us
            <svg
              className="w-4 h-4 ml-1 group-hover: translate-x-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;